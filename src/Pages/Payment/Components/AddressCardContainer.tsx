import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../../../Styles/Styles";
import { AddressResponseDto } from "../../../Types/AddressTypes";
import AddressCard from "./AddressCard";
import AddIcon from "@mui/icons-material/Add";

type addressCardContainerProps = {
  addresses: Array<AddressResponseDto>;
  setSelectedAddress: (id: string) => void;
  selectedAddress: string;
  setShowAddressForm: (show: boolean) => void;
  header: string;
};

const AddressCardContainer = ({
  addresses,
  setSelectedAddress,
  selectedAddress,
  setShowAddressForm,
  header,
}: addressCardContainerProps) => {
  return (
    <Box
      sx={{
        boxShadow: 1,
        borderRadius: 2,
        boxSizing: "border-box",
        p: 3,
      }}
    >
      <Typography variant="h4">{header}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          boxSizing: "border-box",
          flexWrap: "wrap",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
            p: 2,
            width: 150,
            height: 150,
            borderRadius: 2,
            background: `${Colors.primary}`,
            color: "white",
            border: 1,
            cursor: "pointer",
          }}
          onClick={() => setShowAddressForm(true)}
        >
          <Typography variant="h3" fontSize="16px">
            Create Address
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 2,
            }}
          >
            <AddIcon
              style={{
                fontSize: 50,
                color: "white",
              }}
            />
          </Box>
        </Box>
        {addresses?.map((address) => (
          <AddressCard
            address={address}
            setSelectedAddress={setSelectedAddress}
            selectedAddress={selectedAddress}
          />
        ))}
      </Box>
    </Box>
  );
};
export default AddressCardContainer;

import { Box, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Colors } from "../../../Styles/Styles";
import { AddressResponseDto } from "../../../Types/AddressTypes";

type addressCardProps = {
  address: AddressResponseDto;
  setSelectedAddress: (id: string) => void;
  selectedAddress: string;
};

const AddressCard = ({
  address,
  setSelectedAddress,
  selectedAddress,
}: addressCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 150,
        height: 150,
        borderRadius: 2,
        boxShadow: 2,
        border: selectedAddress === address.id ? 3 : 0,
        cursor: "pointer",
      }}
      key={address.id}
      onClick={() => {
        setSelectedAddress(address.id);
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          pl: 1,
          pt: 1,
          boxSizing: "border-box",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            visibility: selectedAddress === address.id ? "visible" : "hidden",
          }}
        >
          <CheckCircleOutlineIcon
            style={{
              position: "absolute",
              left: 2,
              top: 4,
              fontSize: 25,
              color: Colors.primary,
            }}
          />
        </Box>
        <Typography textAlign="center">{address.addressName}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          p: 2,
          textOverflow: "ellipsis",
          overflowY: "hidden",
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            wordBreak: "break-word",
          }}
        >
          {address.fullAddress}
        </Typography>
      </Box>
    </Box>
  );
};
export default AddressCard;

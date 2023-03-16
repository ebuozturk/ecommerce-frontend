import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressForm from "./Components/AddressForm";
import PaymentForm from "./Components/PaymentForm";
import SideContainer from "../../Components/SideContainer";
import { useStateContext } from "../../StateContext";
import { getAddressesByUserId } from "../../Services/AddressService";
import { AddressResponseDto } from "../../Types/AddressTypes";
import { createPayment } from "../../Services/PaymentService";
import { Navigate, useNavigate } from "react-router-dom";
import AddressCardContainer from "./Components/AddressCardContainer";
import { createOrder } from "../../Services/OrderServices";
import { getBasketByUserId } from "../../Services/BasketServices";

const Payment = () => {
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [selectedBillAddress, setSelectedBillAddress] = useState("1");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState<Array<AddressResponseDto>>([]);
  const [showBillAddress, setShowBillAddress] = useState<boolean>(false);
  const { user, basket, setBasket } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    getAddressesByUserId(user.id).then((data) => setAddresses([...data]));
  }, []);

  const handlePayment = () => {
    createPayment()
      .then((res) => {
        let selectedBillAddr = selectedBillAddress;
        if (showBillAddress === false) {
          selectedBillAddr = selectedAddress;
        }
        createOrder(user.id, selectedAddress, selectedBillAddr)
          .then((res) => {
            getBasketByUserId(user.id).then((res) => {
              setBasket(res.data);
            });
            navigate("/paymentStatus/success", { state: { success: true } });
          })
          .catch((err) => console.log(err.response.data.message));
      })
      .catch((err) =>
        navigate("/paymentStatus/failed", { state: { success: false } })
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <form
        style={{
          display: "flex",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <AddressCardContainer
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            addresses={addresses}
            setShowAddressForm={setShowAddressForm}
            header="Delivery Address"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="Send bill to same address"
            onChange={() => setShowBillAddress(!showBillAddress)}
          />
          {showBillAddress && (
            <AddressCardContainer
              selectedAddress={selectedBillAddress}
              setSelectedAddress={setSelectedBillAddress}
              addresses={addresses}
              setShowAddressForm={setShowAddressForm}
              header="Bill Address"
            />
          )}
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              boxSizing: "border-box",
              p: 3,
            }}
          >
            <PaymentForm />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              p: 3,
              boxShadow: 1,
              gap: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4">
              Sub Total {basket?.totalPrice}$
            </Typography>
            <Typography variant="h4">Shipping 10$</Typography>
            <Typography variant="h3">Total offf$</Typography>
            <Button variant="contained" onClick={handlePayment}>
              Pay
            </Button>
          </Box>
        </Box>
      </form>

      {showAddressForm ? (
        <SideContainer title="Create New Address" setShow={setShowAddressForm}>
          <AddressForm addresses={addresses} setAddresses={setAddresses} />
        </SideContainer>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default Payment;

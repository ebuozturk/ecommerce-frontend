import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { productDatas } from "../product";
import { useStateContext } from "../StateContext";
import { useNavigate } from "react-router-dom";
import SideContainer from "./SideContainer";
import BasketCard from "./BasketCard";

const products = productDatas;
const Basket = () => {
  const { setShowBasket, basket } = useStateContext();
  const navigate = useNavigate();

  return (
    <SideContainer title="Your Basket" setShow={setShowBasket}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 6,
          p: 2,
          overflowY: "scroll",
        }}
      >
        {basket !== null ? (
          basket.products.map((product) => <BasketCard basketItem={product} />)
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",

          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pr: 2,
            pl: 2,
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h4" color="black" fontSize="30px">
            Sub Total
          </Typography>
          <Typography variant="h4" color="black" fontSize="30px">
            {basket?.totalPrice}
          </Typography>
        </Box>

        <Button
          disabled={!(basket.products?.length > 0)}
          sx={{
            minWidth: 100,
          }}
          variant="contained"
          onClick={() => {
            setShowBasket(false);
            navigate("/payment");
          }}
        >
          Pay Now
        </Button>
      </Box>
    </SideContainer>
  );
};

export default Basket;

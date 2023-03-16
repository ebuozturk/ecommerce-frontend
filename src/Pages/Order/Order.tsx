import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getOrdersByUserId } from "../../Services/OrderServices";
import { useStateContext } from "../../StateContext";
import { Colors } from "../../Styles/Styles";
import { OrderDto } from "../../Types/OrderTypes";
import OrderItemCard from "./Components/OrderItemCard";

const Order = () => {
  const { user } = useStateContext();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<Array<OrderDto>>([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await getOrdersByUserId(user.id);
      if (response.status === 200) {
        setOrders([...response.data]);
      }
      setIsLoading(false);
    };

    getOrders();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          boxShadow: 1,
          mt: 5,
          p: 5,
          borderRadius: 3,
          boxSizing: "border-box",
        }}
      >
        {orders?.map((order) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: 1,
              borderColor: Colors.border,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                background: Colors.grey,
                p: 2,
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 250,
                }}
              >
                <Typography>Order Date</Typography>
                <Typography>{order.createdDate.toString()}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 200,
                }}
              >
                <Typography>Total Price</Typography>
                <Typography>{order.totalPrice}$</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 200,
                }}
              >
                <Typography>Delivery Address</Typography>
                <Typography>{order.orderAddress.addressName}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
              }}
            >
              {order?.items.map((orderItem) => (
                <>
                  <OrderItemCard orderItem={orderItem} />
                </>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Order;

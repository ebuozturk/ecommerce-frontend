import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProductCoverImage } from "../../../Services/ImageServices";
import { getProductById } from "../../../Services/ProductServices";
import { Colors } from "../../../Styles/Styles";
import { OrderItemDto } from "../../../Types/OrderTypes";
import { ProductResponseType } from "../../../Types/ProductTypes";

const OrderItemCard = ({ orderItem }: { orderItem: OrderItemDto }) => {
  const [coverImage, setCoverImage] = useState<string>("");
  const [product, setProduct] = useState<ProductResponseType | null>(null);

  useEffect(() => {
    getProductCoverImage(orderItem.productId).then((data) =>
      setCoverImage(data.src)
    );
    getProductById(orderItem.productId).then((data) => setProduct(data));
  }, []);

  return (
    <>
      {product !== null && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            border: 1,
            borderColor: Colors.border,
            borderRadius: 1,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: 120,
            }}
          >
            <Box component="img" src={coverImage} sx={{ maxHeight: 100 }} />
          </Box>
          <Typography width={100}>{product.name}</Typography>
          <Typography width={100}>
            {orderItem.price}
            <span style={{ fontSize: 15, color: Colors.grey }}>
              {" "}
              x {orderItem.quantity}
            </span>
          </Typography>
          <Typography width={100}>{orderItem.status}</Typography>
        </Box>
      )}
    </>
  );
};
export default OrderItemCard;

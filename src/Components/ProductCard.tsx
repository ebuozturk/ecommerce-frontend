import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductCoverImage } from "../Services/ImageServices";
import { ProductEsType, ProductResponseType } from "../Types/ProductTypes";

export const ProductCard = ({ product }: { product: ProductResponseType }) => {
  const navigate = useNavigate();

  const [coverImage, setCoverImage] = useState<string>("");

  useEffect(() => {
    getProductCoverImage(product.id).then((data) => setCoverImage(data.src));
  }, [product]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 160,
          overflow: "hidden",
          borderRadius: 3,
          padding: 2,
          boxSizing: "border-box",
          m: 1,
          boxShadow: 1,
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => navigate("/product/" + product.id)}
      >
        <Box
          component="img"
          src={coverImage}
          sx={{
            height: 160,
          }}
        />
        <Typography
          sx={{
            m: 1,
          }}
        >
          {product.name}
        </Typography>
        <Typography>{product.unitPrice}</Typography>
      </Box>
    </>
  );
};
export default ProductCard;

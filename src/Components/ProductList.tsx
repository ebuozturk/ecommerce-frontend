import { Box, Typography } from "@mui/material";
import { boxSizing } from "@mui/system";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getProductCoverImage } from "../Services/ImageServices";
import { ProductResponseType } from "../Types/ProductTypes";
import ProductCard from "./ProductCard";

type ProductListProps = {
  title?: string;
  products: Array<ProductResponseType>;
  maxWidth?: string;
  width?: string;
};

const ProductList = ({
  title,
  products,
  maxWidth,
  width,
}: ProductListProps) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: width === "" ? "100%" : width,
        maxWidth: maxWidth !== "" ? maxWidth : "100%",
        mt: 3,
        p: 1,
        background: "rgba(246, 244, 244,0.99)",
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
          width: "100%",
          pr: 1,
          pl: 1,
          color: "#8E9092",
        }}
      >
        <Typography>
          {title !== undefined ? title : products[0]?.mainProduct.category.name}
        </Typography>
        <Typography>Tümünü Gör</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 1,
          width: "100%",
          boxSizing: "border-box",
          overflowX: "scroll",
        }}
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Box>
    </Box>
  );
};
export default ProductList;

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { getProductsByCategoryId } from "../../Services/ProductServices";
import { ProductResponseType } from "../../Types/ProductTypes";

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Array<ProductResponseType>>([]);

  useEffect(() => {
    const getProducts = () => {
      if (categoryId !== undefined) {
        getProductsByCategoryId(categoryId)
          .then((res) => setProducts(res.data))
          .catch((err) => console.log(err));
      }
    };
    getProducts();
  }, [categoryId]);

  return (
    <Box
      sx={{
        display: "flex",
        p: 3,
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Box>
  );
};
export default Category;

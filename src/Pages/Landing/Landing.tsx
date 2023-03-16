import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Banner from "../../Components/Landing/Banner";
import ProductList from "../../Components/ProductList";
import { productDatas } from "../../product";
import {
  getAllProducts,
  getProductsByCategoryId,
} from "../../Services/ProductServices";
import { ProductResponseType } from "../../Types/ProductTypes";
import { productRoutes } from "../Product";

const categoryIds = [
  "8bb85860-76ef-4509-a3de-19828ff898aa",
  "3e8a78bf-7563-464c-94f6-d0955d958d2e",
  "83ac2dcc-f613-4e73-b2a5-44178221c1cd",
];
const Landing = () => {
  const [products, setProducts] = useState<Array<Array<ProductResponseType>>>(
    []
  );
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      const fetchProducts = async () => {
        var newProducts: Array<Array<ProductResponseType>> = [];

        var result = await Promise.all(
          categoryIds.map(async (categoryId) => {
            const res = await getProductsByCategoryId(categoryId);
            if (res.status === 200 && res.data.length > 0) {
              newProducts = [...newProducts, [...res.data]];
            }
          })
        );
        setProducts((products) => [...products, ...newProducts]);
        effectRan.current = true;
      };
      fetchProducts();
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "90%",
        mt: 4,
      }}
      maxWidth={false}
    >
      <Banner />
      {products.length !== 0 &&
        products.map((prods) => (
          <>
            <ProductList products={prods} width="80%" />
          </>
        ))}
    </Container>
  );
};
export default Landing;

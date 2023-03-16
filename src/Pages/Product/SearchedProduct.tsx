import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { searchProduct } from "../../Services/ProductServices";
import { ProductEsType, ProductResponseType } from "../../Types/ProductTypes";

const SearchedProducts = () => {
  const { query } = useParams();
  const [products, setProducts] = useState<Array<ProductResponseType>>([]);

  useEffect(() => {
    const searchProducts = () => {
      if (query !== undefined) {
        searchProduct(query)
          .then((res) => {
            const resultProducts: Array<ProductResponseType> = res.data.map(
              (p) => {
                return {
                  id: p.productId,
                  name: p.name,
                  featureList: p.featureList,
                  unitPrice: p.unitPrice,
                  mainProductId: "",
                  unitsInStock: 0,
                  quantityPerUnit: 0,
                  storeId: "",
                  mainProduct: null,
                };
              }
            );
            setProducts([...resultProducts]);
          })
          .then(() => console.log(products))
          .catch((err) => console.log(err));
      }
    };
    searchProducts();
  }, [query]);
  return (
    <Box>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Box>
  );
};
export default SearchedProducts;

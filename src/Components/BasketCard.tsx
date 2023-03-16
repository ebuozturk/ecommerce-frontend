import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProductCoverImage } from "../Services/ImageServices";
import { getProductById } from "../Services/ProductServices";
import { BasketProductDto } from "../Types/BasketTypes";
import { ProductResponseType } from "../Types/ProductTypes";
import QuantityButtons from "./QuantityButtons";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  decreaseBasketProduct,
  deleteBasketProduct,
  increaseBasketProduct,
} from "../Services/BasketProductServices";
import { useStateContext } from "../StateContext";
import { getBasketByUserId } from "../Services/BasketServices";

const BasketCard = ({ basketItem }: { basketItem: BasketProductDto }) => {
  const [product, setProduct] = useState<ProductResponseType | null>(null);
  const [coverImage, setCoverImage] = useState<string>("");
  const { setBasket, user } = useStateContext();

  useEffect(() => {
    getProductById(basketItem.productId).then((data) => setProduct(data));
    getProductCoverImage(basketItem.productId).then((data) =>
      setCoverImage(data.src)
    );
  }, [basketItem]);
  return (
    <Box
      sx={{
        display: "flex",
        height: 150,
        maxHeight: 150,
        boxSizing: "border-box",
        borderRadius: 2,
        boxShadow: 1,
        background: "rgba(999,999,999,0.6)",
        justifyContent: "space-evenly",
        p: "1em",
        mt: 2,
      }}
    >
      {product !== null && (
        <>
          <Box
            component="img"
            src={coverImage}
            sx={{
              width: 120,
              flex: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 3,
            }}
          >
            <Typography color="black" variant="h4" fontSize="25px">
              {product.name}
            </Typography>
            <QuantityButtons
              sx={{
                mt: 3,
              }}
              increaseFunction={() =>
                increaseBasketProduct(basketItem.id, 1).then((response) => {
                  if (response.status === 200 && user !== null)
                    getBasketByUserId(user.id).then((res) => {
                      setBasket(res.data);
                    });
                })
              }
              decreaseFunction={() =>
                decreaseBasketProduct(basketItem.id, 1).then((response) => {
                  if (response.status === 200 && user !== null)
                    getBasketByUserId(user.id).then((res) =>
                      setBasket(res.data)
                    );
                })
              }
              quantity={basketItem.quantity}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flex: 1,
            }}
          >
            <Typography color="black">{product.unitPrice}</Typography>
            <Box
              onClick={() =>
                deleteBasketProduct(basketItem.id).then((response) => {
                  if (response.status === 200 && user !== null)
                    getBasketByUserId(user.id).then((res) =>
                      setBasket(res.data)
                    );
                })
              }
            >
              <RemoveCircleOutlineIcon
                sx={{
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
export default BasketCard;

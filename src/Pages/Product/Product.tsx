import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductImageSlider from "../../Components/ProductImageSlider";
import QuantityButtons from "../../Components/QuantityButtons";
import { getProductImagesById } from "../../Services/ImageServices";
import { getProductById } from "../../Services/ProductServices";
import { ProductResponseType } from "../../Types/ProductTypes";
import CircularProgress from "@mui/material/CircularProgress";
import { addProductToBasket } from "../../Services/BasketServices";
import { useStateContext } from "../../StateContext";
import { FeatureDto } from "../../Types/FeatureTypes";
import { FeatureTypeDto } from "../../Types/FeatureTypeTypes";
import { getFeatureTypesByMainProductId } from "../../Services/FeatureTypeServies";
import SelectFeatureComponent from "./components/SelectFeatureComponent";

export type SelectedFeatureDto = {
  id: string;
  name: string;
  featureTypeId: string;
};

const Product = () => {
  const { productId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [product, setProduct] = useState<ProductResponseType | null>(null);
  const [images, setImages] = useState<Array<string>>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [featureTypes, setFeatureTypes] = useState<Array<FeatureTypeDto>>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<
    Array<SelectedFeatureDto>
  >([]);

  const { setBasket, user, setShowBasket } = useStateContext();
  const effectRan = useRef(false);

  const slctdFeatures: Array<SelectedFeatureDto> = [];

  const initializePage = () => {
    getProductById(productId)
      .then((data) => {
        setProduct(data);
        setIsPending(false);
        getProductImagesById(data.id).then((images) => {
          const imgSrcList = images.map((image) => image.src);
          setImages([...imgSrcList]);
        });

        getFeatureTypesByMainProductId(data.mainProduct.id)
          .then((res) => {
            setFeatureTypes(res.data);
            res.data.map((featureType) => {
              featureType.featureDtos.map((feature) => {
                if (selectedFeatures.length !== data.featureList.length) {
                  const existFeature: FeatureDto = data.featureList.find(
                    (ft) => ft.id === feature.id
                  );

                  if (existFeature !== undefined) {
                    slctdFeatures.push({
                      id: existFeature.id,
                      name: existFeature.name,
                      featureTypeId: featureType.id,
                    });
                  }
                }
              });
              console.log("selected");
              console.log(slctdFeatures);
              setSelectedFeatures([...slctdFeatures]);
            });
          })
          .catch((err) => console.log("feature Error: " + err));
      })
      .catch((err) => console.log(err));
  };

  // const changeProduct = useMemo(() => {
  //   initializePage();
  // }, [productId]);

  useEffect(() => {
    if (effectRan.current === false && productId !== undefined) {
      initializePage();
    }

    console.log(state);
    console.log(productId);
    return () => {
      effectRan.current = true;
    };
  }, [productId]);

  const handleOnAddButtonClick = () => {
    if (product !== null && user !== null) {
      addProductToBasket(user?.id, product.id, quantityProduct).then((data) => {
        setBasket(data);
        setShowBasket(true);
      });
    }
  };

  return (
    <Container
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "#F6F4F4",
        mt: 4,
        p: 5,
      }}
    >
      {isPending ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        product !== null && (
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ProductImageSlider images={images} />
            </Box>
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography variant="h2">{product.name}</Typography>
              <Typography sx={{ mt: 3, height: 180 }}>
                {product.mainProduct.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {featureTypes.map((featureType) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.8,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        width: "100%",
                        borderBottom: 1,
                        pl: 1,
                      }}
                    >
                      {featureType.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 0.5,
                      }}
                    >
                      {featureType.featureDtos.map((feature) => {
                        return (
                          <>
                            <SelectFeatureComponent
                              feature={{
                                id: feature.id,
                                name: feature.name,
                                featureTypeId: featureType.id,
                              }}
                              selectedFeatures={selectedFeatures}
                              setSelectedFeatures={setSelectedFeatures}
                              mainProductId={product.mainProduct.id}
                            />
                          </>
                        );
                      })}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Typography sx={{ mt: 3 }} variant="h4">
                {product.unitPrice}$
              </Typography>
              <QuantityButtons
                sx={{
                  mt: 3,
                }}
                increaseFunction={() =>
                  quantityProduct < product.unitsInStock
                    ? setQuantityProduct(quantityProduct + 1)
                    : ""
                }
                decreaseFunction={() =>
                  quantityProduct > 1
                    ? setQuantityProduct(quantityProduct - 1)
                    : ""
                }
                quantity={quantityProduct}
              />
              <Typography>{product?.store.name}</Typography>
              <Button
                sx={{
                  border: 1,
                  mt: 5,
                  width: 200,
                  height: 70,
                  borderRadius: 2,
                }}
                onClick={handleOnAddButtonClick}
              >
                Add To Basket
              </Button>
              <Button
                sx={{
                  mt: 5,
                  ml: 3,
                  width: 200,
                  height: 70,
                  borderRadius: 2,
                }}
                variant="contained"
                onClick={() => {
                  handleOnAddButtonClick();
                  navigate("/payment");
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        )
      )}
      <Box
        sx={{
          mt: 10,
        }}
      >
        {/* <ProductList products={products} title='Products Like the Product'/> */}
      </Box>
    </Container>
  );
};
export default Product;

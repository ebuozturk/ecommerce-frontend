import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

const ProductImageSlider = ({ images }: { images: Array<string> }) => {
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  function changeMainImage(src: string) {
    setMainImage(src);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 400,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
          maxHeight: 400,
        }}
      >
        <Box
          component="img"
          sx={{
            width: "90%",
            maxHeight: 350,
            aspectRatio: 3 / 2,
            objectFit: "contain",
          }}
          src={mainImage}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowY: "hidden",
          overflowX: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "#6969dd #e0e0e0",
          height: 150,
        }}
      >
        {images?.map((image) => (
          <Box
            component="img"
            sx={{
              width: "30%",
              aspectRatio: 3 / 2,
              objectFit: "contain",
            }}
            src={image}
            onClick={() => changeMainImage(image)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductImageSlider;

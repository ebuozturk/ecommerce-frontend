import React from "react";
import { Box, Typography } from "@mui/material";
import { CategoryWithChildType } from "../Types/CategoryTypes";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Colors } from "../Styles/Styles";

const NavbarCategory = ({ category }: { category: CategoryWithChildType }) => {
  const navigate = useNavigate();

  return (
    <>
      {category !== undefined && (
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 40,
              textAlign: "center",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: Colors.categoryOnHoverColor,
              },
            }}
            onClick={() => navigate(`/category/${category.id}`)}
          >
            {category.name}
          </Typography>
        </Box>
      )}
    </>
  );
};
export default NavbarCategory;

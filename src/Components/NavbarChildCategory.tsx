import React from "react";
import { Box, Typography } from "@mui/material";
import { CategoryWithChildType } from "../Types/CategoryTypes";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NavbarChildCategory = ({
  categories,
}: {
  categories: Array<CategoryWithChildType>;
}) => {
  const navigate = useNavigate();

  return (
    <>
      {categories !== undefined && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
            <Box
              sx={{
                flexBasis: "12rem",
              }}
            >
              <Typography
                onClick={() => navigate(`/category/${category.id}`)}
                variant="subtitle2"
                sx={{
                  fontSize: 20,
                  cursor: "pointer",
                }}
              >
                {category.name}
              </Typography>
              {category?.childCategories.map((childCategory) => (
                <Typography
                  sx={{
                    pl: 1,
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                  onClick={() => navigate(`/category/${category.id}`)}
                >
                  {childCategory.name}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};
export default NavbarChildCategory;

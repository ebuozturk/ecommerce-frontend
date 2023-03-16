import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Basket from "./Basket";
import { useStateContext } from "../StateContext";
import {
  CategoryResponseType,
  CategoryWithChildType,
} from "../Types/CategoryTypes";
import {
  getAllMainCategories,
  getAllMainCategoriesWithChilds,
  getCategoriesWithChild,
  getCategoryWithChildById,
} from "../Services/CategoryServices";
import NavbarCategory from "./NavbarCategory";
import { Colors } from "../Styles/Styles";
import NavbarChildCategory from "./NavbarChildCategory";
import { ProductEsType } from "../Types/ProductTypes";
import { searchProduct } from "../Services/ProductServices";

function Navbar() {
  const { showBasket, setShowBasket } = useStateContext();
  const [categories, setCategories] = React.useState<
    Array<CategoryWithChildType>
  >([]);
  const [subCategories, setSubCategories] = React.useState<
    Array<CategoryWithChildType>
  >([]);
  const [showSubCategories, setShowSubCategories] =
    React.useState<boolean>(false);
  const [activeCategory, setActiveCategory] = React.useState<string>("");
  const [searchedData, setSearchedData] = React.useState<Array<ProductEsType>>(
    []
  );
  const settings = [
    { name: "Profile", path: "/profile" },
    { name: "Account", path: "/account" },
    { name: "Logout", path: "/logout" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (path: string) => {
    setAnchorElUser(null);

    navigate(path);
  };

  const handleOnSearch = (string, results) => {
    searchProduct(string)
      .then((res) => setSearchedData(res.data))
      .catch((err) => console.log(err));
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    navigate(`/product/${item.id}`);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  React.useEffect(() => {
    getAllMainCategoriesWithChilds()
      .then((res) => setCategories([...res.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(246, 244, 244)",
        color: "black",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          color: "inherit",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            color: "inherit",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 1,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => handleCloseUserMenu(setting.path)}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button
              onClick={() => setShowBasket(!showBasket)}
              sx={{ color: "inherit" }}
            >
              <ShoppingBasketIcon />
            </Button>
          </Box>
          {showBasket ? <Basket /> : <></>}
        </Toolbar>

        <Box
          sx={{
            position: "relative",
            color: "inherit",
            minHeight: 40,
            maxHeight: 40,
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={() => {
            setShowSubCategories(true);
          }}
          onMouseLeave={() => {
            setShowSubCategories(false);
            setActiveCategory("");
          }}
        >
          {categories.map((category) => (
            <Box
              onMouseEnter={() => {
                setSubCategories(category?.childCategories);
                setShowSubCategories(true);
                setActiveCategory(category.id);
              }}
              sx={{
                backgroundColor: `${
                  activeCategory === category.id
                    ? Colors.categoryOnHoverColor
                    : "inherit"
                }`,
              }}
            >
              <NavbarCategory category={category} />
            </Box>
          ))}
          {showSubCategories && (
            <Box
              sx={{
                position: "absolute",
                minHeight: 300,
                width: "100%",
                bottom: "-300px",
                backgroundColor: Colors.categoryOnHoverColor,
                boxSizing: "border-box",
                p: 2,
                zIndex: 10,
              }}
            >
              <NavbarChildCategory categories={subCategories} />
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;

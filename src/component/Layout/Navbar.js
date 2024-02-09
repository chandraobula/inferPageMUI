import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  IconButton,
  Drawer,
  Typography,
} from "@mui/material";
import Logo from "../Images/logo.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import ProfilePic from "./ProfilePic";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "../styles/Hero.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [themeMode, setThemeMode] = useState("light"); // State to manage theme
  console.log(window.location.pathname.slice(1));

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ffffff",
      },
      text: {
        primary: "#000000",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#000000", // Set black as the primary color
      },
      text: {
        primary: "#ffffff", // Set white as the primary text color
      },
      // Define your dark theme colors here
    },
  });

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  // Get all the anchor elements inside the navigation
  // const location = useLocation();
  // const isActive = (path) => {
  //   return location.pathname === path ? 'active-link' : '';
  // };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          {/* Menu Icon for Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{
              display: { sm: "block", md: "none" },
              position: "absolute",
              top: "15px",
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Sidebar Drawer for Mobile */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <img
                className="Logo"
                src={Logo}
                alt="Logo"
                height={"50"}
                width={"150"}
              />
              <ProfilePic />

              {/* Navigation Links */}
              <nav sx={{ marginTop: 5 }}>
                <ul style={{ padding: 0, listStyleType: "none" }} id="navlink">
                  <li style={{ marginTop: 15 }}>
                    <NavLink to={"/home"}>
                      <Button sx={{ color: "rgba(167, 167, 167, 1)" }}>
                        <HomeOutlinedIcon />
                        <span>Home</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <NavLink to={"/saved"}>
                      <Button sx={{ color: "rgba(167, 167, 167, 1)" }}>
                        <BookmarkBorderTwoToneIcon />
                        Saved
                      </Button>
                    </NavLink>
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <NavLink to={"/profile"}>
                      <Button sx={{ color: "rgba(167, 167, 167, 1)" }}>
                        <PermIdentityOutlinedIcon />
                        Profile
                      </Button>
                    </NavLink>
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <NavLink to={"/settings"} toggleTheme={toggleTheme}>
                      <Button sx={{ color: "rgba(167, 167, 167, 1)" }}>
                        <TuneSharpIcon />
                        Settings
                      </Button>
                    </NavLink>
                  </li>
                  <Box sx={{ marginTop: 10 }}>
                    <li>
                      <NavLink to={"/"}>
                        <Button sx={{ color: "rgba(167, 167, 167, 1)" }}>
                          <TuneSharpIcon />
                          Logout
                        </Button>
                      </NavLink>
                    </li>
                  </Box>
                </ul>
              </nav>
            </Box>
          </Drawer>
          {/* Sidebar */}
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                color: "white",
                // height: '100vh',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {/* Logo */}

              <img
                className="Logo"
                src={Logo}
                alt="Logo"
                height={"50"}
                width={"150"}
              />
              <ProfilePic />
              {/* Navigation Links */}
              <Box sx={{ marginTop: 5 }}>
                <ul
                  style={{ padding: 0, listStyleType: "none" }}
                  className="Navlink"
                >
                  <li style={{ marginTop: 15, display: "flex" }}>
                    <NavLink
                      style={{ color: "rgba(167, 167, 167, 1)" }}
                      to={"/home"}
                    >
                      <Grid className="icons">
                        <HomeOutlinedIcon />
                        <Typography>Home</Typography>
                      </Grid>
                    </NavLink>
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <NavLink
                      to={"/saved"}
                      style={{ color: "rgba(167, 167, 167, 1)" }}
                    >
                      <Grid className="icons">
                        <BookmarkBorderTwoToneIcon />
                        <Typography>Saved</Typography>
                      </Grid>
                    </NavLink>
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <NavLink
                      to={"/profile"}
                      style={{ color: "rgba(167, 167, 167, 1)" }}
                    >
                      <Grid className="icons">
                        <PermIdentityOutlinedIcon />
                        <Typography>Profile</Typography>
                      </Grid>
                    </NavLink>
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <NavLink
                      to={"/settings"}
                      toggleTheme={toggleTheme}
                      style={{ color: "rgba(167, 167, 167, 1)" }}
                    >
                      <Grid className="icons">
                        <TuneSharpIcon />
                        Settings
                      </Grid>
                    </NavLink>
                  </li>
                  <Box sx={{ marginTop: 15 }}>
                    <li>
                      <NavLink
                        to={"/"}
                        style={{ color: "rgba(167, 167, 167, 1)" }}
                      >
                        <Grid className="icons">
                          <TuneSharpIcon />
                          <Typography>Logout</Typography>
                        </Grid>
                      </NavLink>
                    </li>
                  </Box>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ backgroundColor: "#000" }}></Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Navbar;

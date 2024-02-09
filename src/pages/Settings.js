import React from "react";
import Layout from "../component/Layout/Layout";
import { Typography, Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
//import { ThemeProvider, createTheme } from '@mui/material/styles';
//import '../component/Layout/Navbar.js';

const Settings = ({ themeMode, toggleTheme }) => {
  // const handleThemeToggle = () =>{
  //   toggleTheme();
  // }
  // const darkMode = () => {

  // }

  const handleLightThemeChange = () => {
    //Implement logic to set the theme to Light
    console.log(themeMode);
    toggleTheme();
  };

  const handleDarkThemeChange = () => {
    //Implement logic to set the theme to Dark
    toggleTheme("dark");
  };

  return (
    <Layout>
      <Box sx={{ borderBottom: "1px solid #F6F6F6", padding: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ color: "black" }}>
          Settings
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontWeight={"bold"}
        letterSpacing={2}
        mt={5}
        mx={3}
        sx={{ color: "rgba(190, 190, 190, 1)" }}
      >
        THEME
      </Typography>
      <Box sx={{ display: "flex", padding: 0 }}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          mx={3}
          mt={1}
          fontSize={15}
        >
          Adjust Theme
        </Typography>
        <Box sx={{ marginLeft: 10 }}>
          <Button
            sx={{
              backgroundColor: "rgba(212, 228, 255, 1)",
              color: "rgba(34, 34, 34, 1)",
            }}
            size="medium"
            onClick={handleLightThemeChange}
          >
            <CheckCircleIcon fontSize="small" />
            Light
          </Button>
        </Box>
        <Box sx={{ marginLeft: 3 }}>
          <Button
            sx={{ backgroundColor: "rgba(0, 46, 125, 1)", color: "white" }}
            size="medium"
            onClick={handleDarkThemeChange}
          >
            Dark
          </Button>
          {/* <Button onClick={handleThemeToggle}>
        {themeMode === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </Button> */}
        </Box>
      </Box>
      <Typography
        variant="body2"
        fontWeight={"bold"}
        letterSpacing={3}
        mt={4}
        mx={3}
        sx={{ color: "rgba(190, 190, 190, 1)" }}
      >
        SEARCH HISTORY
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            mx={3}
            mt={1}
            fontSize={15}
          >
            Clear History
          </Typography>
        </Box>
        <Box sx={{ marginLeft: 10 }}>
          <Button
            sx={{ color: "#000", border: "1px solid rgba(224, 224, 224, 1)" }}
          >
            <HighlightOffIcon fontSize="small" />
            Clear History
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Settings;

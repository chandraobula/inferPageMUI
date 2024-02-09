import React from "react";
import Hero from "./component/Hero";
import "./component/styles/App.css";
import { Grid } from "@mui/material";
import "./component/styles/Divison.css";
import Register1 from "./pages/Register1";
//import Login from "./component/Login";

const Division = () => {
  return (
    <div className="divison">
      <Grid container>
        <Grid
          className="left-section"
          item
          xs={12}
          md={8}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Hero />
        </Grid>
        <Grid item xs={12} md={4} order={1}>
          <Register1 />
          {/* <Login /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Division;

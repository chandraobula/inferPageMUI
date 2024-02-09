import React from "react";
//import Header from './Header';
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
//import Division from "../Division";
//import Home from '../pages/Home'

const Layout = ({children}) => {
  
  return(
    <div>
        <>
        <Grid container>
          <Grid item md={2} xs={2} sx={{backgroundColor: 'linear-gradient(0deg, #F7F7F7, #F7F7F7),linear-gradient(0deg, #FFFFFF, #FFFFFF)',borderRight:'1px solid #F6F6F6',display:'grid',justifyContent:'center',alignItems:'center'}}>
            <Navbar/>
          </Grid>
          <Grid item md={10} xs={10}>
          <div>
            {children}
          </div>
          </Grid>

        </Grid>
        
        </>
    </div>
  ) 
};

export default Layout;

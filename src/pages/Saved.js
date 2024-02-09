import React from "react";
import Layout from "../component/Layout/Layout";
import {Typography, Box} from "@mui/material";

const Saved = () => {
  return(
    <Layout>
      <Box sx={{borderBottom:'1px solid #F6F6F6',padding:3}}>
        <Typography variant="h6" fontWeight={700} sx={{ color: 'black' }}>
          Saved Articles & Research Papers
        </Typography>
        </Box>
    </Layout>
    
  ) 
};

export default Saved;

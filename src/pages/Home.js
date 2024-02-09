import React from "react";
import {Typography, Box,TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Search1 from '../component/Images/Search1.svg';
import Layout from "../component/Layout/Layout";



const Home = () => {
  return (
    <Layout>
     
      <Box sx={{display:'flex',borderBottom:'1px solid #F6F6F6'}} >
         
              <Typography variant="h6" sx={{ color: 'black' }} padding={3}>
                Library Search
              </Typography>
              
              <TextField
                sx={{ width: '80%',marginTop:2}}
                
                placeholder="Search..."
                InputProps={{
                    
                  startAdornment: (
                    
                    <SearchIcon sx={{color:'#A7A7A7'}} />
                  ),
                }}
              />

        </Box>
        <Box sx={{display:'grid',placeItems:'center'}} my={19}> 
          <img src={Search1} alt="icon"></img>
          <Typography variant="subtitle1" color={'#CFCFCF'} fontSize={20}>Type the name an article or <br/>
                    research paper in the search bar</Typography>
        </Box>

    </Layout>
    
  )
};

export default Home;


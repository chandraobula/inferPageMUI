import React,{useState} from "react";
import {AppBar, Box, Typography,Toolbar, IconButton, Drawer, Divider,Button} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {NavLink } from "react-router-dom";
//import Logo from '../../src/components/Images/logo.svg';
import Logo from '../Images/logo.svg';
//import '../styles/HeaderStyles.css';
//import '../styles/Home.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
//import {NavLinks} from './Layout/NavLinks.js'



const Header = () => {
  const [mobileOpen,setMobileopen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileopen(!mobileOpen)
  }

  const  drawer = (
    <Box
     onClick={handleDrawerToggle} sx={{textAlign:'center',backgroundColor:'#000'}}>
       <Typography variant="h5" component="div" sx={{color:'black',flexGrow:1,fontFamily:'Avenir-Bold'}}>
        <img className="Logo" src={Logo} alt="Logo" height={'50'} width={'150'}/>
      </Typography>
        <Divider sx={{backgroundColor :'whitesmoke'}}></Divider>
          <ul className="mobile-navigation" >
            <li>
            <NavLink to={'/'}><Button sx={{color:'white'}}><HomeOutlinedIcon/>Home</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}><Button sx={{color:'white'}}><MenuBookTwoToneIcon/>Menu</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/about'}><Button sx={{color:'white'}}><InfoOutlinedIcon/>About</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/login'}><Button sx={{color:'white'}}>  <LoginOutlinedIcon/>Login</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/signup'}><Button sx={{color:'white'}}>  <ExitToAppIcon/>Signup</Button></NavLink>
            </li>
          </ul>
    </Box>
  )
  return (
  <>
  <Box>
    <AppBar  component={'nav'} sx={{backgroundColor:'white'}}>
      <Toolbar>
        <IconButton 
        color="black"
        aria-label="open drawer"
        edge="start"
        sx={{
          mr:2,
          display:{sm:'none'} 
           
        }}
        onClick={handleDrawerToggle}
        >
          <MenuRoundedIcon sx={{color:'white'}}/>
        </IconButton>
        {/* <Typography variant="h5" component="div"sx={{color:'black',flexGrow:1,my:2,fontFamily:'Avenir-Bold'}}> */}
          <img className="Logo" src={Logo} alt="Logo" height={'50'} width={'150'}/>
        {/* </Typography> */}
        <Box sx={{display:{xs:"none",sm:"block",flexGrow:1,my:2,alignItems:'flex-end'}}} width={500}>
          
          {/* <ul className="navigation-menu">
            
            <li>
              <NavLink activeClassName='active' to={'/'}><Button sx={{color:'white',border:'1px solid red',borderRadius:'4px'}}><HomeOutlinedIcon />Home</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}><Button sx={{color:'white',border:'1px solid red'}}><MenuBookTwoToneIcon />Menu</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/about'}><Button sx={{color:'white',border:'1px solid red'}}><InfoOutlinedIcon />About</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/login'}><Button sx={{color:'white',border:'1px solid red'}}><LoginOutlinedIcon />Login</Button></NavLink>
            </li>
            <li>
              <NavLink to={'/signup'}><Button sx={{color:'white',border:'1px solid red'}}><ExitToAppIcon />Signup</Button></NavLink>
            </li>
          </ul> */}
      </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{display:{xs:'block',sm:"none",backgroundColor:'#000'},
      "& .MuiDrawer-paper":{
        boxSizing:"border-box",
        width:"240px",
        backgroundColor:'#000',
        
        boxShadow:'2px 5px 3px white'

      },
    }}>
      {drawer}
    </Drawer>
  </Box>
  <Box sx={{p:0}}>
    <Toolbar/>
  </Box>
  </Box>
  </>
  )
};

export default Header;

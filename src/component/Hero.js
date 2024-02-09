import React ,{useState,useEffect} from "react";
import {Typography,Grid,Stack, Box}from "@mui/material";
import './styles/Hero.css';
import { Slideshow } from "../data/Data";
import LeftSection from "./LeftSection";
import Logo from '../component/Images/logo.svg';
import Tick from '../component/Images/tick.svg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import the carousel styles


const Hero = () => {
  const [isMobile,setIsMobile] = useState(false);
   
  useEffect(()=> {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
    };
    window.addEventListener("resize",handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize",handleResize);
    };
  },[]);
  if(isMobile){
    return(
      <>
      <Box padding={3}>
      <img src={Logo} alt="Logo"></img>
      </Box>
       <Stack spacing={-2} className="headings">
            <item>
                <Typography variant="h6" textAlign={"center"} fontSize={40} fontWeight="bold" >INFER<sup>TM</sup></Typography>
            </item>
            <item>
                <Typography variant="body2"  textAlign={"center"} fontSize={25} fontWeight="bold"  >Information for Excellence in Research</Typography>
            </item>
            <item>
                <Typography variant="h2" textAlign={"center"} fontSize={25}color={"#4D4D4D"} my={3}>Focused On Unique Needs Of The<br></br>
                    Research Community</Typography>
            </item>
        </Stack>
        <Carousel className="carousel">
          {Slideshow.map(item => (
            <div key={item.name} className="carousel-image">
              <Box>
              <Typography fontSize={20} fontWeight={'bold'} textAlign={'start'} sx={{backgroundColor: 'hsla(0, 100%, 100%, 0.5)'}}>{item.name}</Typography>
              </Box>
              <img src={item.image} alt={item.name} />
              <p className="legend">{item.description}</p>

            </div>
            ))}
        </Carousel>
          <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center'}} my={4}>
            <Grid item xs={4} md={3}>
                <Box sx={{display:'flex'}}>
                    <img src={Tick} alt="checkbox"/>
                    <Typography fontSize='10px' fontWeight={'bold'} sx={{display:'inline'}}>Quick Intelligence</Typography>
                </Box>
            </Grid> 
            <Grid item xs={4} md={3}>
                <Box sx={{display:'flex'}}>
                    <img src={Tick} alt="checkbox"/>
                    <Typography fontSize='10px' fontWeight={'bold'} sx={{display:'inline'}}>Knowledge Excellence</Typography>
                </Box>   
            </Grid>
            <Grid item xs={4} md={3}>
                <Box sx={{display:'flex'}}>
                    <img src={Tick} alt="checkbox"></img>   
                    <Typography fontSize={'10px'} fontWeight={'bold'} sx={{display:'inline'}}>Optimal Allocation</Typography>
                </Box>
            </Grid>
        </Grid>
      </>
  );
}else{
  return(
    <LeftSection/>
  );
  }
};
export default Hero;

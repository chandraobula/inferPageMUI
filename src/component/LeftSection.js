import React from "react";
import { Typography,Stack,Grid,Box} from "@mui/material";
import Skull from './Images/skull.svg';
import Doctors from './Images/doctors.svg';
import Book from './Images/analysis.svg';
import Danger from './Images/danger.svg';
import Patient from './Images/patient.svg';
import Chromosomes from './Images/chromosomes.svg';
import BoneScan from './Images/boneScan.svg';
import Tick from './Images/tick.svg';
import './styles/LeftSection.css';
//import { findAllByText } from "@testing-library/react";

const LeftSection = () => {
  return(
    <>
        <Stack spacing={-3} className="headings">
            <item className='item1'>
                <Typography variant="h6" fontWeight={'bold'} fontSize={50}>INFER<sup>TM</sup></Typography>
            </item>
            <item className='item2'>
                <Typography variant="body2" fontWeight={'bold'} letterSpacing={1} fontSize={30}>Information for Excellence in Research</Typography>
            </item>
            <item className='item3'>
                <Typography variant="h2" fontSize={30} color={"#4D4D4D"} letterSpacing={2} my={3}>Focused On Unique Needs Of The<br></br>
                    Research Community</Typography>
            </item>
        </Stack>
        <Box className='middle-container' my={-2}>
            <Grid container className="grid-container" >
                <Grid item sm='5' md='4'className="four-columns" padding={2}>
                    <Grid sm='12' >
                    <Typography variant="h6" fontSize={25} fontWeight="bold" my={-1}>NIH NEWS</Typography>
                    </Grid>
                    <Grid  sx={{position:'relative'}} padding={0} >
                        <Box sx={{position:'relative'}}>
                        <img style={{width:'100%'}} src={Skull} alt="Skull"></img>
                        <Typography variant="caption" component={'div'} fontSize='10px' sx={{position:'absolute',display:'block',top:'60%',color:'white'}}>Brain signatures of chronic pain<br></br>
                                identified in a small group of people<br></br> 
                                    <b>May 25. 2023</b></Typography>
                        </Box>
                    </Grid>
                    <Grid sx={{position:'relative'}} padding={0}>
                        <Box sx={{position:'relative'}}>
                        <img style={{width:'100%'}}src={Doctors} alt="Doctors"></img>
                        <Typography variant="caption" fontSize={'10px'} sx={{position:'absolute',display:'block',top:'60%'}}>Mirati’s Sitravatnib Fails in Phase III<br></br>Lung Cancer Trial,Nixes Development<br></br>
                            <b>May 25. 2023</b></Typography>
                            </Box>
                    </Grid>
                </Grid>
                <Grid item sm='7' md='8'className="eight-columns">
                    {/* <Typography variant="h6" fontWeight={'bold'} fontSize={20}>Research Paper Publishing</Typography> */}
                    <Typography variant="h6" paddingLeft={2} paddingTop={1} fontSize={25} fontWeight="bold">RESEARCH PAPER PUBLISHING</Typography>
                    <Grid container paddingLeft={2}>
                        <Grid item md='1'>
                            <img src={Book} alt="skull-img"></img>
                        </Grid>
                        <Grid item md='11'>
                           <Typography variant="caption" fontSize={10}><b>Impact of Vaccines; Health, Economic & Social Perspectives</b><br></br>
                                        Charlene M. C. Rodrigues & Stanley A Plotkin</Typography>
                        </Grid>   
                    </Grid>
                    <Grid container paddingLeft={2}borderBottom={'2px solid  #FFFFFF97'}>
                        <Grid item md='1' >
                            <img src={Book} alt="skull-img"></img>
                        </Grid>
                        <Grid item md='11' paddingBottom={1}>
                           <Typography variant="caption" fontSize={10}><b>Detoxification of azo dyes in the context of environmental processes</b><br></br>
                                Deepak Rawat, Vandana Mishra, Radhey Shyam Sharma</Typography>
                        </Grid>   
                    </Grid>
                    <Grid container>
                        <Grid item md='6' padding={2}>
                            <Box>
                                <Typography variant="h6" fontWeight={"bold"}>BIO TECH NEWS</Typography> 
                            </Box>
                            <Box sx={{position:'relative'}}>
                                <img src={Danger} style={{width:'100%'}}alt="DangerImage"/>
                                <Typography variant="caption" fontSize={'10px'} sx={{position:'absolute',display:'block',top:'50%',color:'white'}}>First-in-human trial of oral drug to<br></br> remove radioactive contamination</Typography>
                            </Box>
                            <Box sx={{position:'relative'}}>
                                <img src={Patient}style={{width:'100%'}} alt="PatientImage"/>
                                <Typography variant="caption" fontSize={'10px'} sx={{position:'absolute',display:'block',top:'50%',color:'white'}}>Scientists release a new human<br></br> “pangenome” reference</Typography>
                            </Box>
                        </Grid>
                        <Grid item md='6' borderLeft={'2px solid #FFFFFF97'} padding={2}>
                            <Box>
                                <Typography variant="h6" fontWeight={"bold"}>OTHER NEWS</Typography> 
                            </Box>
                            <Box sx={{position:'relative'}}>
                                <img src={Chromosomes} style={{width:'100%'}} alt="DangerImage"/>
                                <Typography variant="caption" fontSize={'9px'}  sx={{position:'absolute',display:'block',top:'60%',color:'white'}}>Obstructive sleep apnea associated with<br></br> increased risks for long COVID</Typography>
                            </Box>
                            <Box sx={{position:'relative'}}>
                                <img src={BoneScan} style={{width:'100%'}} alt="PatientImage"/>
                                <Typography variant="caption" fontSize={'10px'} sx={{position:'absolute',display:'block',top:'50%',color:'white'}}>Therapy for Rare Bone Disorder<br></br>Shows Promise in NIH Clinical Trial</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center'}} my={5}>
            <Grid item xs={4} md={3} sx={{display:'inline',flexDirection:'row'}}>
                <Box  sx={{display:'flex'}}>
              
                    <img src={Tick} style={{width:'15%'}} alt="checkbox"></img>
               
                    <Typography variant="caption" fontWeight={600} fontSize={'15px'} sx={{display:'inline'}}>Quick Intelligence</Typography>
               </Box>
            </Grid> 
            <Grid item xs={4} md={3}>
                <Box sx={{display:'flex'}}>
                    <img src={Tick} style={{width:'15%'}} alt="checkbox"/>
                    <Typography variant="caption" fontWeight={600} fontSize={'15px'} sx={{display:'inline'}}>Knowledge Excellence</Typography>
                </Box>   
            </Grid>
            <Grid item xs={4} md={3}>
                <Box sx={{display:'flex'}}>
                    <img src={Tick} style={{width:'15%'}} alt="checkbox"></img>   
                    <Typography variant="caption" fontWeight={600} fontSize={'15px'} sx={{display:'inline'}}>Optimal Allocation</Typography>
                </Box>
            </Grid>
        </Grid>
    </>
  ) 
};

export default LeftSection;

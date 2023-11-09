import React from "react";
import {TextField,Box,  Typography,useMediaQuery,Stack,Button} from "@mui/material";
import { useState } from "react";
import Logo from './Images/logo.svg';
import './styles/SignUp.css';


const SignUp = () =>{
 
  const InitialValues = {userName:"",mobile:"",email:"",password:"",confirmPassword:""}
  const[userData,setUserData] = useState(InitialValues);
  //const [errors,setErrors] = useState({});

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setUserData({...userData,[name]: value});
  };
  

  return(
    <>
      <Box sx={{float:'right'}} padding={2}>
      {isMobile ? null : <img src={Logo} alt='Logo'></img>}
      </Box>
      <Box my={10}>
        <Typography variant="h6"  textAlign='center' fontSize={40} fontWeight={'bold'}>SignUp</Typography>
        <Typography variant="subtitle1" textAlign={"center"} sx={{color:'#A7A7A7'}}> Welcome to infer</Typography>
      
        <form>
          <Stack sx={{width:'80%'}} mx={6}>
              <TextField 
              label="UserName" 
              variant="outlined"
              name="userName"
              type="text"
              value={userData.userName}
              onChange={handleChange}
              // error={!!errors.userName}
              // helperText={errors.userName}
              required
              sx={{margin:1}}
              >
              </TextField>
            </Stack>
            <Stack sx={{width:'80%'}} mx={6}>
              <TextField 
              label="Email" 
              name="email" 
              type="email"
              value={userData.email}
              variant="outlined" 
              onChange={handleChange}
              // error={!!errors.email}
              // helperText={errors.email}
              required
              sx={{margin:1}}>
                
              </TextField>
              </Stack>
              <Stack sx={{width:'80%'}} mx={6}>
              <TextField 
              label="Mobile" 
              name="mobile" 
              type="num"
              value={userData.mobile}
              variant="outlined" 
              onChange={handleChange}
              // error={!!errors.mobile}
              // helperText={errors.mobile}
              required 
              sx={{margin:1}}>  
              </TextField>
              </Stack>
              <Stack sx={{width:'80%'}} mx={6}>
              <TextField 
              label="Password" 
              name="password" 
              type="password"
            
              value={userData.password}
              variant="outlined"
              onChange={handleChange}
              // error={!!errors.password}
              // helperText={errors.password} 
              required 
              sx={{margin:1}}
              ></TextField>
              </Stack>
              <Stack sx={{width:'80%'}} mx={6}>
              <TextField 
              label="ConfirmPassword" 
              name="confirmPassword" 
              type="password" 
              value={userData.confirmPassword}
              variant="outlined" 
              onChange={handleChange}
              // error={!!errors.confirmPassword}
              // helperText={errors.confirmPassword}
              required 
              sx={{margin:1}}>
              </TextField>
              </Stack>
              <Stack sx={{width:'80%'}} mx={6}>
                <Button variant="contained" type="submit" sx={{margin:2}} style={{background: 'linear-gradient(90.06deg, #FCD963 1%, #FCD172 54.43%, #FDAD72 107.86%)',color:'black',fontWeight:'boldest'}}>SignUp</Button>
                <p>Already Have an account?<a href="Login.js">Login</a></p>
              </Stack>
        </form>
      </Box>
    </>
  )
};
export default SignUp;

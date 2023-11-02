import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, TextField, Typography,Button,Grid,Link,FormControlLabel,Checkbox, Container, Paper } from "@mui/material";
import '../styles/HeaderStyles.css';


const Login = () => {
 

  const handleSubmit = (event) => {
    event.preventDefault();
 
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }
    return (
    <Layout className="Login-layout">
      <Container component={'main'} maxWidth="xs" sx={{justifyContent:'center',alignItems:'center'}}>
      <Paper sx={{width: "500px", height: "450px",justifyContent:'center',alignItems:'center',}} elevation={24}>
      <Box sx={{  
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
            }}>
        <Typography component="h1" variant="h3" fontWeight={500}>  Sign in</Typography>
        <Typography variant="body2">Please enter your credentials</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 , mx:8,width:"400px",alignItems:'center',justifyContent:'center'}}>
        <TextField
         margin="normal"
         required
         fullWidth
         id="email"
         label="Email Address"
         name="email"
         autoComplete="email"
         autoFocus></TextField>
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
             <Grid container>
              <Grid item xs>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              </Grid>
              <Grid item mt={1.5}>
              <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <a href="www.google.com">
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 1, mb: 1 }}
              >
                Sign in with Google
              </Button>
            </a>
      </Box>
      </Paper>
      </Container>
    </Layout>
    );
}
export default Login;

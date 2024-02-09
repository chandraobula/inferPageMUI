import React from "react";
import Layout from "../component/Layout/Layout";
import { Typography, Box, Grid } from "@mui/material";
//import ProfilePic from "../component/Layout/ProfilePic";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useSelector } from "react-redux";

const Profile = () => {
  const products = useSelector((state) => state.allProducts.product);
  const { name, email, password } = products[0];
  console.log(products);

  const [avatarUrl, setAvatarUrl] = useState(""); // State to hold the avatar URL
  const inputRef = React.createRef(); // Reference to input element
  const [userData, setUserData] = useState(null);
  // const storedUserData = localStorage.getItem('userData');
  // const userData = JSON.parse(storedUserData);
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedUrl = reader.result;
        setAvatarUrl(uploadedUrl);

        localStorage.setItem("avatarUrl", uploadedUrl);
        //setAvatarUrl(reader.result); // Set the avatar URL to the selected image
        window.location.reload();
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };
  const handleRemoveProfilePic = () => {
    setAvatarUrl(""); // Clear the profile picture URL
    localStorage.removeItem("avatarUrl"); // Remove the profile picture URL from localStorage
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  const handleAvatarClick = () => {
    inputRef.current.click(); // Click the hidden file input when Avatar is clicked
  };
  useEffect(() => {
    // Get username from local storage when the component mounts
    const storedUserData = localStorage.getItem("userData");
    //const userData= JSON.parse(storedUserData);
    //if (userData && userData.username) {
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      //setUsername(userData.username); // Set the username in the state
      setUserData(parsedUserData);
    }
    // Get avatar URL from localStorage
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
    if (storedAvatarUrl) {
      setAvatarUrl(storedAvatarUrl); // Set the avatar URL in the state
    }
  }, []);
  const userDataa = {
    username: "Chandra Obula Reddy",
    email: "chandraobula.theegala@gmial.com",
    Password: "* * * * * * * * *",
  };
  return (
    <Layout>
      <Box sx={{ borderBottom: "1px solid #F6F6F6", padding: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ color: "black" }}>
          Edit Profile
        </Typography>
      </Box>
      <Grid container sx={{ padding: 0 }}>
        <Grid item>
          <Grid>
            <input
              accept="image/*"
              id="avatar-input"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={inputRef}
            />
            <Grid
              container
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              mx={0}
              spacing={2}
            >
              <Grid item>
                <Avatar
                  alt="Profile Picture"
                  src={avatarUrl}
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                  onClick={handleAvatarClick}
                >
                  {/* You can add initials or icons as a fallback */}
                  {avatarUrl ? null : (
                    <Typography variant="h5">User</Typography>
                  )}
                </Avatar>
              </Grid>
              <Grid item>
                <u
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={handleAvatarClick}
                >
                  Edit Profile Photo
                </u>
              </Grid>
              <Grid item>
                <u
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={handleRemoveProfilePic}
                >
                  Revome Profile Photo
                </u>
              </Grid>
            </Grid>
            <Grid sx={{ marginTop: 3 }} mx={3}>
              <Typography
                variant="body2"
                fontWeight={600}
                letterSpacing={2}
                sx={{ color: "rgba(190, 190, 190, 1)" }}
              >
                FULL NAME
              </Typography>
              <Typography fontWeight={600} sx={{ color: "#000" }}>
                {userDataa.username} {name}
                <EditOutlinedIcon fontSize="small" sx={{ color: "blue" }} />
              </Typography>
              <Typography
                variant="body2"
                fontWeight={600}
                letterSpacing={2}
                mt={2}
                sx={{ color: "rgba(190, 190, 190, 1)" }}
              >
                EMAIL
              </Typography>
              <Typography fontWeight={600} sx={{ color: "#000" }}>
                {userDataa.email} {email}
                <EditOutlinedIcon fontSize="small" sx={{ color: "blue" }} />
              </Typography>
              <Typography
                variant="body2"
                fontWeight={600}
                letterSpacing={2}
                mt={2}
                sx={{ color: "rgba(190, 190, 190, 1)" }}
              >
                Password
              </Typography>
              <Typography fontWeight={600} sx={{ color: "#000" }}>
                {userDataa.Password}
                {password}
                <EditOutlinedIcon fontSize="small" sx={{ color: "blue" }} />
              </Typography>

              {/* {userDataa ? (
          
          <div>
            <Typography fontWeight={600} sx={{color:'#000'}}>{userDataa.username}</Typography>
          </div>
          
        ):(
          <p>no imkjwcbdhwbcdkw </p>
        )} */}
            </Grid>
            <Grid style={{ marginTop: 0 }}></Grid>
            <Grid style={{ marginTop: 0 }}></Grid>
            <Typography variant="h6" sx={{ color: "black" }}></Typography>
          </Grid>
        </Grid>
        <Grid item>
          {/* <a href="">Edit Profile pic</a>
      <a href="">Remove Profile pic</a> */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Profile;

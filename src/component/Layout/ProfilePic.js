import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import { fetchUser } from "../redux/Actions/actions";

const ProfilePic = ({
  //avatarUrl,
  userData,
  loading,
  error,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  console.log("control came here");

  const [avatarUrl, setAvatarUrl] = useState(""); // State to hold the avatar URL
  const inputRef = React.createRef(); // Reference to input element

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // const reader = new FileReader();
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedUrl = reader.result;
        setAvatarUrl(uploadedUrl);
        sessionStorage.setItem("avatarUrl", uploadedUrl);
        window.location.reload();
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };

  const handleAvatarClick = () => {
    inputRef.current.click(); // Click the hidden file input when Avatar is clicked
  };

  // const handleDeleteAvatar = () => {
  //   deleteProfilePic();
  // };

  useEffect(() => {
    //Get username from local storage when the component mounts
    const storedUserData = localStorage.getItem("userData");
    const userData = JSON.parse(storedUserData);
    if (userData && userData.username) {
      //setUserName(userData.username); // Set the username in the state
      //setUserData(userData);
    }
    //Get avatar URL from localStorage
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
    if (storedAvatarUrl) {
      setAvatarUrl(storedAvatarUrl); // Set the avatar URL in the state
    }
  }, []);

  return (
    <>
      <div>
        <input
          accept="image/*"
          id="avatar-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
          ref={inputRef}
        />
        <div style={{ marginTop: 20, marginRight: 20 }}>
          <Avatar
            alt="Profile Picture"
            src={avatarUrl}
            sx={{ width: 100, height: 100, cursor: "pointer" }}
            onClick={handleAvatarClick}
          >
            {/* You can add initials or icons as a fallback */}
            {avatarUrl ? null : <Typography variant="h5">User</Typography>}
          </Avatar>
          <Typography sx={{ color: "rgba(149, 149, 149, 1)" }}>
            Welcome back
          </Typography>
        </div>
      </div>

      <div>
        <Typography
          variant="subtitle2"
          fontWeight={600}
          sx={{ color: "black" }}
        >
          {userData}
        </Typography>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePic);

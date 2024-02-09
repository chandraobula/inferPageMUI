import React from "react";
import { NavLink } from "react-router-dom";
//import Division from "../Division";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';

const Routes = () => {
  const routes = [
    {
      name: "Division",
      path: "/",
      
    },
    {
      name: "Register1",
      path: "/register",
      
    },
    {
      name: "Login",
      path: "/login",
      
    },
    {
      name: "Home",
      path: "/home",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "Saved",
      path: "/saved",
      icon: <BookmarkBorderTwoToneIcon />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <PermIdentityOutlinedIcon />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <TuneSharpIcon />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <TuneSharpIcon />,
    },
  ];

  return (
    <ul>
      {routes.map((route) => (
        <li key={route.name}>
          <NavLink activeClassName="active" to={route.path}>
            <route.icon /> {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Routes;

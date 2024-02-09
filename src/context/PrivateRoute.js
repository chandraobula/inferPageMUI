import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
//import { AuthContext } from "./AuthContext";
import { AuthContext } from "./AuthProvider";
const PrivateRoute = ({ element, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return auth.isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

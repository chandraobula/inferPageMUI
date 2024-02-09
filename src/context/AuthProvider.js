// import { createContext, useState } from "react";
// import React from "react";
// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    accessToken: null,
    userId: null
  });

  const login = (accessToken, userId) => {
    setAuth({
      isAuthenticated: true,
      accessToken,
      userId
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      accessToken: null,
      userId: null
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

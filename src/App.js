import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
//import { createTheme } from "@mui/material/styles";
import Division from "./Division";
//import Register1 from "./pages/Register1";
//import Navbar from "./component/Layout/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Division />}></Route>

          {/* <Route path="/navbar" exact Component={<Navbar />}></Route> */}

          <Route path="/home" element={<Home />}></Route>
          <Route path="/saved" element={<Saved />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

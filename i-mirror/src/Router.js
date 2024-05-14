import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import Agree from "./pages/signup/agree/Agree.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/signup/agree" element={<Agree></Agree>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

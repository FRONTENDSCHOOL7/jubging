import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import LoginStart from "../pages/Login/LoginStart";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Sign/SignUp";
import ProfileStart from "../pages/Sign/ProfileStart";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/loginStart" element={<LoginStart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/profile" element={<ProfileStart />} />
        <Route path="/post" />
        <Route path="/newletter" />
        <Route path="/chat" />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
}

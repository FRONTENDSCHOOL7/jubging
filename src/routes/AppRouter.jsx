import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import LoginStart from "../pages/Login/LoginStart";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Sign/SignUp";
import ProfileStart from "../pages/Sign/ProfileStart";
import Post from "../pages/Post/Post";
import NewsLetter from "../pages/NewsLetter/NewsLetter";
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";
import ProfileModification from "../pages/Profile/ProfileModification";
import AddCourse from "../pages/AddCourse/AddCourse";
import Upload from "../pages/Upload/Upload";

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
        <Route path="/post" element={<Post />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileModification />} />
        <Route path="/profile/addcourse" element={<AddCourse />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

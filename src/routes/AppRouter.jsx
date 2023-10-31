// react
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// recoil
import { useRecoilValue } from "recoil";
import { loginAtom } from "../recoil/loginAtom";

// components
import Home from "../pages/Home/Home";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import LoginStart from "../pages/Login/LoginStart";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Sign/SignUp";
import ProfileStart from "../pages/Sign/ProfileStart";
import Post from "../pages/Post/Post";
import PostEdit from "../pages/Post/PostEdit";
import Upload from "../pages/Upload/Upload";
import NewsLetter from "../pages/NewsLetter/NewsLetter";
import Profile from "../pages/Profile/Profile";
import ProfileModification from "../pages/Profile/ProfileModification";
import AddCourse from "../pages/AddCourse/AddCourse";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import ChatListPage from "./../pages/ChatList/ChatListPage";
import Chat from "../pages/Chat/Chat";
import Followrs from "./../pages/Follow/Followers";
import Following from "./../pages/Follow/Following";
import Search from "./../pages/Search/Search";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  const isLoggedIn = useRecoilValue(loginAtom);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <SplashScreen />} />
        <Route path="/loginStart" element={<LoginStart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/profile" element={<ProfileStart />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/upload" element={<Upload />} />
        <Route path="/post/:postId/edit" element={<PostEdit />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/chat" element={<ChatListPage />} />
        <Route path="/chat/room" element={<Chat />} />
        {/* <Route path="/myprofile" element={<Profile />} /> */}
        <Route path="/profile/:accountname" element={<Profile />} />
        <Route path="/profile/:accountname/follower" element={<Followrs />} />
        <Route path="/profile/:accountname/following" element={<Following />} />
        <Route
          path="/profile/:accountname/edit"
          element={<ProfileModification />}
        />
        <Route path="/profile/:accountname/addcourse" element={<AddCourse />} />
        <Route path="profile/course/:courseId" element={<CourseDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

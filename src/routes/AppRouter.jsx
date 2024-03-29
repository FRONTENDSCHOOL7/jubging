import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { loginAtom } from "../recoil/loginAtom";

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
import ProfileEdit from "../pages/Profile/ProfileEdit";
import PloggingRecord from "../pages/PloggingRecord/PloggingRecord";
import AddCourse from "../pages/AddCourse/AddCourse";
import AddCourseEdit from "../pages/CourseDetail/CourseEdit";
import DrawCourse from "../pages/AddCourse/PathDraw";
import DrawCourseEdit from "../pages/AddCourse/PathDrawEdit";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import ChatList from "../pages/Chat/ChatList";
import Chat from "../pages/Chat/Chat";
import Followrs from "./../pages/Follow/Followers";
import Following from "./../pages/Follow/Following";
import Search from "./../pages/Search/Search";
import NotFound from "../pages/NotFound/NotFound";
import ScrollTop from "./../hook/useScrollTop";

export default function AppRouter() {
  const isLoggedIn = useRecoilValue(loginAtom);

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        {/* 로그인 하지 않아도 접근 가능한 url */}
        <Route path="/" element={isLoggedIn ? <Home /> : <SplashScreen />} />
        <Route path="/loginStart" element={<LoginStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/profile" element={<ProfileStart />} />
        {isLoggedIn ? (
          <>
            {/* 로그인 해야 접근 가능한 url */}
            <Route path="/home" element={<Home />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/post/upload" element={<Upload />} />
            <Route path="/post/:postId/edit" element={<PostEdit />} />
            <Route
              path="/ploggingrecord/:accountname"
              element={<PloggingRecord />}
            />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/chat" element={<ChatList />} />
            <Route path="/chat/room" element={<Chat />} />
            <Route path="/profile/:accountname" element={<Profile />} />
            <Route
              path="/profile/:accountname/follower"
              element={<Followrs />}
            />
            <Route
              path="/profile/:accountname/following"
              element={<Following />}
            />
            <Route
              path="/profile/:accountname/edit"
              element={<ProfileEdit />}
            />
            <Route
              path="/ploggingrecord/:accountname/addcourse"
              element={<AddCourse />}
            />
            <Route
              path="/ploggingrecord/:accountname/edit"
              element={<AddCourseEdit />}
            />
            <Route
              path="/ploggingrecord/addcourse/drawcourse"
              element={<DrawCourse />}
            />
            <Route
              path="/ploggingrecord/addcourse/drawcourseedit"
              element={<DrawCourseEdit />}
            />
            <Route
              path="ploggingrecord/:courseId/course"
              element={<CourseDetail />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/*" element={<NotFound />} />
          </>
        ) : (
          // 로그인 하지 않으면 loginStart url로 접근
          <Route path="/*" element={<Navigate to="/loginStart" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

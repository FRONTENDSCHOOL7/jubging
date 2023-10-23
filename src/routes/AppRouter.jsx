import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/post" />
        <Route path="/newletter" />
        <Route path="/chat" />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
}

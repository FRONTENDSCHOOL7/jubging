import React from "react";
import { useLocation } from "react-router-dom";
import UploadPage from "../Upload/Upload";

export default function PostEdit() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return <UploadPage editData={data} />;
}

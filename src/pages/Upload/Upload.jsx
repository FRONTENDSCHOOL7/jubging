import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postImgUpload } from "../../api/imageAPI";
import { postUpload } from "../../api/postAPI";
import {
  PostContainer,
  TextArea,
  ImagePreview,
  ImgUploadButton,
  ImgLabel,
} from "./UploadStyle";
import UploadHeader from "../../components/common/Header/UploadHeader";

function UploadPage() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState(null);

  // 게시글 업로드
  const handleUploadPost = async (e) => {
    e.preventDefault();
    const postData = await postUpload(content, image);
    console.log("postData: ", postData);
    navigate(`/profile/${postData.post.author.username}`);
  };

  // 이미지 업로드
  const handleImgUpload = async (imageFile) => {
    const form = new FormData();
    form.append("image", imageFile);

    try {
      const imageData = await postImgUpload(form);
      const imageUrl = "https://api.mandarin.weniv.co.kr/" + imageData.filename;
      setImage(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 이미지 교체
  const handleImageChange = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    handleImgUpload(imageFile);
  };

  return (
    <form onSubmit={handleUploadPost}>
      <UploadHeader type={"submit"} />
      <PostContainer>
        {/* {previewUrl && <ImagePreview src={previewUrl} alt="post" />} */}
        {image && <ImagePreview src={image} alt="post" />}
        <ImgLabel htmlFor="upload-button-file">이미지 등록</ImgLabel>
        <input
          type="file"
          style={{ display: "none" }}
          id="upload-button-file"
          onChange={handleImageChange}
        />
        <TextArea
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요.
(최대 2000자 입력, 사진 최대 3장 업로드)"
          maxLength={2000}
        />
        <ImgUploadButton
          onClick={() => document.getElementById("upload-button-file").click()}
        ></ImgUploadButton>
      </PostContainer>
    </form>
  );
}

export default UploadPage;

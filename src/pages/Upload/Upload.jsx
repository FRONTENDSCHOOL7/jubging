import React, { useState } from "react";
import {
  PostContainer,
  TextArea,
  ImagePreview,
  UploadButton,
} from "./UploadStyle";
import Header from "../../components/common/Header/UploadHeader";

function UploadPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onloadend = () => {
        setImage(event.target.files[0]);
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <Header />
      <PostContainer>
        {previewUrl && <ImagePreview src={previewUrl} alt="post" />}

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
(최대 2000자 입력, 사진 최대 10장 업로드)"
          maxLength={2000}
        />

        <UploadButton
          onClick={() => document.getElementById("upload-button-file").click()}
        ></UploadButton>
      </PostContainer>
    </>
  );
}

export default UploadPage;

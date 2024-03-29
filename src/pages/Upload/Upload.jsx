import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { postUpload, putEditPost } from "../../api/postAPI";
import useImageUploader from "../../hook/useImageUploader";

import Header from "../../components/common/Header/Header";
import {
  PostContainer,
  TextArea,
  ImagePreview,
  ImgUploadButton,
  ImgLabel,
  ImgDeleteBtn,
  A11yHidden,
  ImageContainer,
} from "./UploadStyle";

function UploadPage({ editData }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { image, setImage, handleImgUpload } = useImageUploader();

  const [content, setContent] = useState("");
  const [enableUpload, setEnableUpload] = useState(false);

  // editData가 있으면 게시글 불러오기
  useEffect(() => {
    if (editData) {
      setContent(editData.content);
      setImage(editData.image);
    }
  }, [editData]);

  // 게시글 수정 및 업로드
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData) {
        const response = await putEditPost(postId, content, image);
        response && navigate(`/profile/${editData.author.accountname}`);
      } else {
        const postData = await postUpload(content, image);
        postData && navigate(`/profile/${postData.post.author.accountname}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지 교체
  const handleImageChange = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    handleImgUpload(imageFile);
  };

  // 이미지 삭제
  const handleRemoveimage = () => {
    setImage(null);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 저장 버튼 활성화
  useEffect(() => {
    setEnableUpload(!!(image || content));
  }, [image, content]);

  return (
    <form onSubmit={handleSubmit}>
      <Header
        variant={enableUpload ? "primary" : "default"}
        disabled={!enableUpload}
      >
        피드 작성
      </Header>
      <PostContainer>
        <ImgLabel htmlFor="upload-button-file">이미지 등록</ImgLabel>
        {image && (
          <ImageContainer>
            <ImagePreview src={image} alt="등록 이미지" />
            <ImgDeleteBtn type="button" onClick={handleRemoveimage}>
              <A11yHidden>삭제</A11yHidden>
            </ImgDeleteBtn>
          </ImageContainer>
        )}
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
(최대 2000자 입력, 사진 최대 1장 업로드)"
          maxLength={2000}
        />
        <ImgUploadButton
          type="button"
          onClick={() => document.getElementById("upload-button-file").click()}
        >
          <A11yHidden>이미지 등록</A11yHidden>
        </ImgUploadButton>
      </PostContainer>
    </form>
  );
}

export default UploadPage;

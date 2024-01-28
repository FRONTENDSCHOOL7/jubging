import A11yHidden from "../common/A11yHidden/A11yHidden";
import {
  ImageContainer,
  UserImage,
  ImageButton,
  Container,
} from "./ProfileImageStyle";

export default function ProfileChange({ handleImgUpload, profileImage }) {
  const handleImageChange = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    handleImgUpload(imageFile);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    document.getElementById("upload-button-file").click();
  };

  return (
    <Container>
      <h2>
        <A11yHidden>프로필 이미지 등록</A11yHidden>
      </h2>
      <ImageContainer>
        <UserImage $profileImage={profileImage} alt="프로필 이미지" />
        <input
          type="file"
          style={{ display: "none" }}
          id="upload-button-file"
          onChange={handleImageChange}
          accept=".jpg, .jpeg, .png, .bmp"
        />
      </ImageContainer>
      <ImageButton type="button" onClick={handleFileUpload}>
        <A11yHidden>프로필 이미지 등록하기</A11yHidden>
      </ImageButton>
    </Container>
  );
}

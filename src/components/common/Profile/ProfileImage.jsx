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

  return (
    <Container>
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

      <ImageButton
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("upload-button-file").click();
        }}
      />
    </Container>
  );
}

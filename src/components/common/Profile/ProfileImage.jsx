import React, { useState } from "react";
import { ImageContainer, UserImage, ImageButton } from "./ProfileImageStyle";

export default function ProfileChange({
  tmargin,
  lmargin,
  rmargin,
  bmargin,
  setImage,
  handleImageUpload,
}) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(event.target.files[0]);

      // 이미지 업로드
      await handleImageUpload(event);
    }
  };

  return (
    <>
      <ImageContainer>
        <UserImage
          previewUrl={previewUrl}
          $tmargin={tmargin}
          $lmargin={lmargin}
          $rmargin={rmargin}
          $bmargin={bmargin}
          alt="profile"
        />

        <input
          type="file"
          style={{ display: "none" }}
          id="upload-button-file"
          onChange={handleImageChange}
          accept=".jpg, .jpeg, .png, .bmp"
        />

        <ImageButton
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("upload-button-file").click();
          }}
        />
      </ImageContainer>
    </>
  );
}

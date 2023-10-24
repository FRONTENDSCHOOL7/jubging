import React, { useState } from "react";
import { ImageContainer, UserImage, ImageButton } from "./ProfileImageStyle";

export default function ProfileChange({
  tmargin,
  lmargin,
  rmargin,
  bmargin,
  setImage,
}) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <ImageContainer>
        <UserImage
          $tmargin={tmargin}
          $lmargin={lmargin}
          $rmargin={rmargin}
          $bmargin={bmargin}
        >
          {previewUrl && <img src={previewUrl} alt="profile" />}
        </UserImage>

        <input
          type="file"
          style={{ display: "none" }}
          id="upload-button-file"
          onChange={handleImageChange}
        />

        <ImageButton
          onClick={() => document.getElementById("upload-button-file").click()}
        />
      </ImageContainer>
    </>
  );
}

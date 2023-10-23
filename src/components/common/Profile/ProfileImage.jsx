import React, { Children } from "react";
import { ImageContainer, UserImage, ImageButton } from "./ProfileImageStyle";

// const ProfileChange = ({}) => {
//   return <UserImage />;
//   <ChangeImageButton />;
// };

export default function ProfileChange({
  children,
  tmargin,
  lmargin,
  rmargin,
  bmargin,
}) {
  return (
    <>
      <ImageContainer>
        <UserImage
          $tmargin={tmargin}
          $lmargin={lmargin}
          $rmargin={rmargin}
          $bmargin={bmargin}
        >
          {children}
        </UserImage>
        <ImageButton />
      </ImageContainer>
    </>
  );
}

import { useState } from "react";
import imageCompression from "browser-image-compression";

import { BASE_URL } from "./../api/axios";
import { postImgUpload } from "./../api/imageAPI";

function useImageUploader() {
  const [image, setImage] = useState(null);

  const handleImgUpload = async (imageFile) => {
    const form = new FormData();

    // 이미지 압축 옵션 지정
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
    };

    // 파일 압축
    const compressedBlod = await imageCompression(imageFile, options);

    // File로 변환
    const compressedFile = new File([compressedBlod], imageFile.name, {
      type: compressedBlod.type,
      lastModified: imageFile.lastModified,
    });

    form.append("image", compressedFile);

    try {
      const imageData = await postImgUpload(form);
      const imageUrl = BASE_URL + imageData.filename;
      setImage(imageUrl);
      console.log(imageData);
    } catch (error) {
      console.log(error);
    }
  };

  return { image, setImage, handleImgUpload };
}

export default useImageUploader;

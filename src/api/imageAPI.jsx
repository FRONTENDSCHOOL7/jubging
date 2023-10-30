import { imgAxios } from "./axios";

export const postImgUpload = async (FormData) => {
  const response = await imgAxios.post("/image/uploadfile", FormData);
  return response.data;
};

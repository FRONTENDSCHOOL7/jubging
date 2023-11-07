import { useLocation } from "react-router-dom";
import UploadPage from "../Upload/Upload";

export default function PostEdit() {
  const location = useLocation();
  const data = location.state.postData;
  return <UploadPage editData={data} />;
}

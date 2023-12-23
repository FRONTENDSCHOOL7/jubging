import { useLocation } from "react-router-dom";
import CourseUploadPage from "../AddCourse/AddCourse";

export default function PostEdit() {
  const location = useLocation();
  const data = location.state ? location.state.postData : null;
  return <CourseUploadPage CourseeditData={data} />;
}

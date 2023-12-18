import { useLocation } from "react-router-dom";
import CoursePage from "../AddCourse/AddCourse";

export default function CourseDetailEdit() {
  const location = useLocation();
  const data = location.state.postData;
  return <CoursePage editData={data} />;
}

import { useLocation } from "react-router-dom";
import AddCoursePage from "../AddCourse/AddCourse";

export default function CourseEdit() {
  const location = useLocation();
  const data = location.state ? location.state.product : null;
  return <AddCoursePage editData={data} isEdit />;
}

// import { useLocation } from "react-router-dom";
// // import AddCoursePage from "../AddCourse/AddCourse";
// import AddCoursePage from "../CourseDetail/CourseDetail";

// export default function CourseEdit() {
//   const location = useLocation();
//   const courseInfo = location.state.courseInfo;
//   return <AddCoursePage editData={courseInfo} isEdit />;
// }

// 위의 데이터가 null로 들어감

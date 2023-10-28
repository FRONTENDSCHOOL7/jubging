import UploadHeader from "../../components/common/Header/UploadHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import { Title, Label, Detail, MapCanvas } from "./CourseDetailStyle";

const CourseDetail = ({ nickname, courseName, courseLength, courseReview }) => {
  return (
    <>
      <UploadHeader />
      <Title>
        {nickname} 다 줍는 현지 님 만의 <br />
        {courseName}뚝섬 줍깅 47번 코스
      </Title>
      <MapCanvas></MapCanvas>
      <Label>코스 이름</Label>
      <Detail>{courseName}뚝섬 줍깅 47번 코스</Detail>
      <Label>코스 길이</Label>
      <Detail>{courseLength}13</Detail>
      <Label>한줄평</Label>
      <Detail>{courseReview}한강을 바라보며 달리는 플로깅 굿굿</Detail>
      <Navbar />
    </>
  );
};

export default CourseDetail;
import { useState } from "react";
import UploadHeader from "../../components/common/Header/UploadHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import { Form, Title, MapCanvas } from "./AddCourseStyle";
import Button from "../../components/common/Button/ButtonContainer";
import Input from "../../components/common/Input/Input";

const AddCourse = ({ nickname }) => {
  const [courseName, setCourseName] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [courseReview, setCourseReview] = useState("");
  return (
    <>
      <UploadHeader />
      <Form>
        <Title>
          {nickname} 님 만의 <br />
          플로깅 코스를 입력해주세요.
        </Title>
        <MapCanvas>
          <h3>Map 그리는 방법</h3>
          <ul>
            <li>지도를 드래그하여 이동할 수 있습니다.</li>
            <li>지도를 클릭하면 거리 그리기가 시작됩니다.</li>
            <li>지도를 드래그하며 이동하고 경유할 지점을 클릭합니다.</li>
            <li>마지막으로 도착지점을 클릭합니다.</li>
            <li>두 손가락으로 클릭하면 경로 그리기가 종료됩니다.</li>
          </ul>
          <Button
            width="100%"
            height="31px"
            $bgColor={(props) => props.theme.colors.mainColor}
          >
            경로 등록하러 가기
          </Button>
        </MapCanvas>
        <Input
          label="코스 이름"
          type="text"
          name="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="2~15자 이내여야 합니다."
        />
        <Input
          label="코스 길이"
          type="number"
          name="courseLength"
          value={courseLength}
          onChange={(e) => setCourseLength(e.target.value)}
          placeholder="숫자만 입력 가능합니다."
        />
        <Input
          label="한줄평"
          type="text"
          name="courseReview"
          value={courseReview}
          onChange={(e) => setCourseReview(e.target.value)}
          placeholder="한 줄 평을 적어주세요."
        />
      </Form>
      <Navbar />
    </>
  );
};

export default AddCourse;

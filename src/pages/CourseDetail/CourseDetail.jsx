import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCoutseDetail } from "../../api/postAPI";

import Navbar from "../../components/common/Navbar/Navbar";
import { Title, Label, Detail, MapCanvas } from "./CourseDetailStyle";
import Loading from "../Loading/Loading";
import MoreHeader from "../../components/common/Header/MoreHeader";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await getCoutseDetail(courseId);
        setCourseInfo(response);
        setIsLoading(!isLoading);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourseDetail();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MoreHeader />
          <Title>
            {courseInfo.author.username}님만의
            <br />
            {courseInfo.itemName}
          </Title>
          <MapCanvas></MapCanvas>
          <Label>코스 이름</Label>
          <Detail> {courseInfo.itemName}</Detail>
          <Label>코스 길이</Label>
          <Detail> {courseInfo.price}</Detail>
          <Label>한줄평</Label>
          <Detail> {courseInfo.link}</Detail>
          <Navbar />
        </>
      )}
    </>
  );
};

export default CourseDetail;

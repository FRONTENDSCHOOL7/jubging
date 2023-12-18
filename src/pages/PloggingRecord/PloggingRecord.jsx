import { useCallback, useEffect, useState } from "react";
import Header from "../../components/common/Header/Header";
import TierCard from "../../components/common/Tier/TierCard";
import Navbar from "./../../components/common/Navbar/Navbar";
import {
  MapImage,
  MapLength,
  RecordContainer,
  RecordDetail,
  RecordItem,
  RecordLink,
  RecordList,
  RecordReview,
  RecordTitle,
  Title,
} from "./PloggingRecordStyle";
import { getUserCourse } from "../../api/postAPI";
import { useParams } from "react-router-dom";
import MapComponet from "./../../components/kakaomap/MapComponent";

function PloggingRecord() {
  const { accountname } = useParams();
  const [course, setCourse] = useState([]);

  const fetchUserCourse = useCallback(async () => {
    try {
      const response = await getUserCourse(accountname);

      if (response.length > 0) {
        setCourse(() => {
          return [...response];
        });
      }
    } catch (error) {
      console.log();
    }
  }, [accountname]);

  useEffect(() => {
    fetchUserCourse();
  }, [fetchUserCourse]);

  console.log(course);

  return (
    <>
      <Header>다 줍는 착한 하영</Header>
      <TierCard />
      <RecordContainer>
        <Title>플로깅 기록</Title>
        <RecordList>
          {course.map((item) => (
            <RecordItem>
              <RecordLink to={`/profile/${item.id}/course`} key={item.id}>
                <MapImage>
                  <MapComponet data={item} />
                </MapImage>
                <RecordDetail>
                  <div>
                    <RecordTitle>{item.itemName}</RecordTitle>
                    <MapLength>{item.price}m</MapLength>
                  </div>
                  <RecordReview>{item.link}</RecordReview>
                </RecordDetail>
              </RecordLink>
            </RecordItem>
          ))}
        </RecordList>
      </RecordContainer>
      <Navbar />
    </>
  );
}

export default PloggingRecord;

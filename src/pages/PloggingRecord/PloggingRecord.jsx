import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserCourse } from "../../api/postAPI";

import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../recoil/userAtom";

import noFollowRabbit from "../../assets/images/crying-bear.svg";
import MapComponet from "./../../components/kakaomap/MapComponent";
import PloggingRecordCard from "../../components/common/Tier/PloggingRecordCard";
import Header from "../../components/common/Header/Header";
import Navbar from "./../../components/common/Navbar/Navbar";
import Loading from "../Loading/Loading";
import {
  MapImage,
  MapLength,
  NoRecord,
  RecordContainer,
  RecordDate,
  RecordDetail,
  RecordItem,
  RecordLink,
  RecordList,
  RecordReview,
  RecordTitle,
  Title,
} from "./PloggingRecordStyle";
import AddButton from "../../components/common/Button/AddButton";

function PloggingRecord() {
  const { accountname } = useParams();
  const userInfo = useRecoilValue(userInfoAtom);

  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const [accumulate, setAccumulate] = useState(0);

  const fetchUserCourse = useCallback(async () => {
    try {
      const response = await getUserCourse(accountname);
      setIsLoading(false);

      if (response.length > 0) {
        setCourse(() => {
          return [...response];
        });

        let sum = 0;
        response.forEach((course) => {
          sum += course.price;
        });
        setAccumulate(sum);
      }
    } catch (error) {
      console.log(error);
    }
  }, [accountname]);

  useEffect(() => {
    fetchUserCourse();
  }, [fetchUserCourse]);

  return (
    <>
      {userInfo.accountname === accountname ? (
        <Header>마이플로깅</Header>
      ) : (
        <Header>{accountname}</Header>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PloggingRecordCard accumulate={accumulate} />
          <RecordContainer>
            <Title>플로깅 기록</Title>
            {course.length === 0 ? (
              <NoRecord>
                <img src={noFollowRabbit} alt="우는 곰" />
                <span>기록이 존재하지 않아요.</span>
              </NoRecord>
            ) : (
              <RecordList>
                {course.map((item) => (
                  <RecordItem key={item.id}>
                    <RecordLink to={`/ploggingrecord/${item.id}/course`}>
                      <MapImage>
                        <MapComponet data={item} />
                      </MapImage>
                      <RecordDetail>
                        <RecordDate>
                          {item.createdAt.slice(0, 10).replace(/-/g, ".")}
                        </RecordDate>
                        <div>
                          <RecordTitle>{item.itemName}</RecordTitle>
                          <MapLength>{item.price / 1000}km</MapLength>
                        </div>
                        <RecordReview>{item.link}</RecordReview>
                      </RecordDetail>
                    </RecordLink>
                  </RecordItem>
                ))}
              </RecordList>
            )}
          </RecordContainer>
          <AddButton />
        </>
      )}
      <Navbar />
    </>
  );
}

export default PloggingRecord;

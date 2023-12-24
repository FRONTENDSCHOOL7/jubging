import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecordContainer = styled.section`
  margin-bottom: 60px;
  padding-top: 18px;
  border-top: 1px solid #dbdbdb;
`;

export const Title = styled.h2`
  padding: 0 25px;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const RecordList = styled.ul`
  padding: 0 23px 21px;
`;

export const RecordItem = styled.li`
  padding: 15px;
  margin-top: 21px;
  border-radius: 10px;
  transition: all 0.2s ease-out;
  background: rgba(65, 166, 222, 0.05);

  &:hover {
    transform: scale(1.03);
  }
`;

export const RecordLink = styled(Link)`
  display: flex;
  gap: 19px;
`;

export const MapImage = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
`;

export const RecordDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

export const RecordDate = styled.span`
  color: ${(props) => props.theme.colors.textColor};
`;

export const RecordTitle = styled.h3`
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const MapLength = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
`;

export const RecordReview = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const NoRecord = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40vh;

  img {
    width: 100px;
  }

  span {
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.colors.textColor};
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecordContainer = styled.section`
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  padding: 18px 23px 0;
  border-top: 1px solid #dbdbdb;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const RecordList = styled.ul`
  padding: 0 23px 21px;
`;

export const RecordItem = styled.li`
  padding-top: 21px;
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
  padding: 20px 0;
`;

export const RecordTitle = styled.h3`
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const MapLength = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
`;

export const RecordReview = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
`;

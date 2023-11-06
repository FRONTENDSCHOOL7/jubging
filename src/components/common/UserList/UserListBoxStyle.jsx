import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 16px;
`;

export const Maindiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageDiv = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  margin-right: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: auto;
`;

export const UserName = styled.p`
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const SubText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

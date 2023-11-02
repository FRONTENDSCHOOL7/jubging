import styled from "styled-components";
import { Link } from "react-router-dom";

import baseprofile from "../../../assets/icons/baseprofile.svg";

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;

  width: 100%;

  padding-left: 16px;
`;

export const ImageDiv = styled.div`
  display: block;
  width: 42px;
  height: 42px;
  margin-top: 10px;
  margin-right: 5px;

  /* ? */
  aspect-ratio: 1 / 1;
  object-fit: cover;

  background-image: url(${({ $image }) => ($image ? $image : baseprofile)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border: 1px solid black;
  border-radius: 50%;
`;

export const Maindiv = styled.div`
  display: flex;
`;

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 15px auto;
`;

export const UserName = styled.p`
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  overflow: hidden;
`;
export const SubText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  overflow: hidden;
`;

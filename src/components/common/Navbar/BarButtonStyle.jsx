import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const Navli = styled.li`
  flex: 1 1 78px;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    img {
      filter: invert(71%) sepia(25%) saturate(5570%) hue-rotate(172deg)
        brightness(93%) contrast(86%);
    }

    p {
      color: #40a6de;
    }
  }
`;

export const NewLetterLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-top: 4px;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

export const NewsLetter = styled.img`
  width: 42px;
  height: 42px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

import styled from "styled-components";

export const UserList = styled.ul`
  width: 100%;

  li {
    margin: 0 auto;
    max-width: 350px;
    padding-bottom: 20px;
  }

  div {
    display: flex;
  }

  /* .searchContents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */

  .userName {
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: ${(props) => props.theme.colors.blackColor};
    font-weight: 500;
  }
  .accountName {
    color: ${(props) => props.theme.colors.textColor};
    font-size: ${(props) => props.theme.fontSize.small};
    line-height: 15px;
  }
  .highlight {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import addIcon from "../../../assets/icons/add-btn.svg";

function AddButton() {
  const { accountname } = useParams();
  const { pathname } = useLocation();

  return (
    <BtnContainer>
      {(pathname === "/" || "/home") && <AddBtn to={"/post/upload"} />}
      {pathname === `/ploggingrecord/${accountname}` && (
        <AddBtn to={`/ploggingrecord/${accountname}/addcourse`} />
      )}
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  position: fixed;
  bottom: 60px;
  max-width: 390px;
  width: 100%;
  height: 60px;
`;

const AddBtn = styled(Link)`
  position: absolute;
  right: 20px;
  width: 45px;
  height: 45px;
  z-index: 999;
  border-radius: 50%;
  background: url(${addIcon}) center no-repeat;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px -1px,
      rgba(0, 0, 0, 0.07) 0px 4px 6px -1px;
  }
`;

export default AddButton;

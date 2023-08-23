import { useNavigate } from "react-router";
import { styled } from "styled-components";
import {
  StyledLink,
  FormButton,
  RoundedGreenToDark,
  MirrorFormButton,
} from "../reusableComponents/Buttons";
import { useState } from "react";
import FlexContainer from "../FlexContainer";
import TextParagraph from "../reusableComponents/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import CenteredModal from "../reusableComponents/CenteredModal";

const LogOutContainer = styled.div`
  position: absolute;
  bottom: -170px;
  left: -50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.mainBg};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 500ms, background 1s;
  color: ${({ theme }) => theme.mainTextColor};
`;

const LogOutSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${({ $logOut }) => ($logOut ? 1 : 0)};
  pointer-events: ${({ $logOut }) => ($logOut ? "auto" : "none")};
  background-color: ${({ theme }) => theme.transparentBg};
  transition: 400ms;
`;

const LogOutModal = ({ toggleModal, logOut, logOutFunc }) => {
  return (
    <LogOutSection $logOut={logOut} onClick={toggleModal} data-close="close">
      <CenteredModal>
        <TextParagraph style={{ marginBottom: "26px" }}>
          Are you sure you want to log out?
        </TextParagraph>
        <FlexContainer style={{ gap: "10px" }}>
          <FormButton onClick={logOutFunc}>Yes</FormButton>
          <MirrorFormButton onClick={toggleModal} data-close="close">
            No
          </MirrorFormButton>
        </FlexContainer>
      </CenteredModal>
    </LogOutSection>
  );
};

const LogOut = ({ visible }) => {
  const navigate = useNavigate();
  const [logOut, setLogOut] = useState(false);

  const handleLogOut = () => {
    navigate("/");
  };

  const toggleModal = (e) => {
    e.stopPropagation();
    const target = e.target.getAttribute("data-close");
    if (target === "close") {
      setLogOut((prev) => !prev);
    }
  };

  return (
    <>
      <LogOutContainer $visible={visible}>
        <StyledLink to={"/edit"}>
          Edit profile
          <FontAwesomeIcon style={{ marginLeft: "37px" }} icon={faPencil} />
        </StyledLink>
        <RoundedGreenToDark onClick={toggleModal} data-close="close">
          Log out
        </RoundedGreenToDark>
      </LogOutContainer>

      <LogOutModal
        toggleModal={toggleModal}
        logOut={logOut}
        logOutFunc={handleLogOut}
      />
    </>
  );
};

export default LogOut;

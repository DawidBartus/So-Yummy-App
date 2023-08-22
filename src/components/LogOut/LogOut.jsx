import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { AllGreenBtn, StyledLink } from "../reusableComponents/Buttons";

const LogOutContainer = styled.div`
  position: absolute;
  bottom: -150px;
  left: -50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.mainBg};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 500ms, background 1s;
  color: ${({ theme }) => theme.mainTextColor};
`;

const LogOut = ({ visible }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <LogOutContainer visible={visible}>
        <StyledLink to={"/edit"}>Edit profile</StyledLink>
        <AllGreenBtn to={"/logOut"}>Log out</AllGreenBtn>
      </LogOutContainer>
    </>
  );
};

export default LogOut;

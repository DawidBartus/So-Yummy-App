import { styled } from "styled-components";
import { ReactComponent as Menu } from "../../utils/hamburger.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import CompanyIcon from "../../utils/CompanyIcon";
import MainMenu from "./MainMenu";
import Switch from "./Switch";
import spinach from "../../utils/spinachMobile.png";

const MobileMenuIcon = styled(Menu)`
  cursor: pointer;
  &:hover path {
    stroke: #8baa36;
  }
  @media (min-width: 1279px) {
    display: none;
  }
`;
const BackgroundImage = styled.div`
  position: fixed;
  width: 321px;
  height: 343px;
  bottom: 0;
  right: 0;
  background-image: url(${spinach});
`;

const MenuWrapper = styled.section`
  background-color: #ebf3d4;
  position: relative;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 1s;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1279px) {
    transform: translateX(100%);
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const FlexContainer = styled.div`
  padding: 24px 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CenteredFlexContainer = styled(FlexContainer)`
  justify-content: center;
  padding: 0px;
  align-items: flex-start;
`;

const mobileCss = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  color: "#22252A",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "18px",
  letterSpacing: "-0.36px",
  gap: "32px",
};

const switchON = {
  margin: "18px 16px",
  display: "inline-block",
  "@media (max-width: 1279px)": {
    display: "inline-block",
  },
};
const MobileList = ({ close, state }) => {
  return (
    <MenuWrapper open={state}>
      <FlexContainer>
        <CompanyIcon close={close} />
        <CloseIcon icon={faX} onClick={close} />
      </FlexContainer>
      <CenteredFlexContainer>
        <MainMenu style={mobileCss} />
      </CenteredFlexContainer>
      <Switch style={switchON} />
      <BackgroundImage />
    </MenuWrapper>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div onClick={toggleOpen}>
        <MobileMenuIcon />
      </div>
      <MobileList close={toggleOpen} state={isOpen} />
    </>
  );
};

export default MobileMenu;

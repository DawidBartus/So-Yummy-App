import { styled } from "styled-components";
import { ReactComponent as Menu } from "../../utils/hamburger.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import CompanyIcon from "../../utils/CompanyIcon";

const MobileMenuIcon = styled(Menu)`
  cursor: pointer;
  &:hover path {
    stroke: #8baa36;
  }
  @media (min-width: 1279px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
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
  @media (min-width: 1279px) {
    transform: translateX(100%);
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  width: 22px;
  height: 22px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 16px 0;
`;

const MobileList = ({ close, state }) => {
  return (
    <MenuWrapper open={state}>
      <FlexContainer>
        <CompanyIcon />
        <CloseIcon icon={faX} onClick={close} />
      </FlexContainer>
    </MenuWrapper>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
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

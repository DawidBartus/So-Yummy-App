import styled from "styled-components";
import SectionContainer from "../MainContainer";
import Switch from "./Switch";
import MainMenu from "./MainMenu";
import CompanyIcon from "../../utils/CompanyIcon";
import MobileMenu from "./MobileMenu";
import { Outlet } from "react-router";

const NavigationElem = styled.nav`
  position: relative;
  padding-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1500px;
`;

const AvatarAnchor = styled.a`
  display: flex;
  align-items: center;
  transition: 1s;
  color: ${({ theme }) => theme.mainTextColor};
  gap: 18px;
  &:hover {
    color: #8baa36;
  }
`;
const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rebeccapurple;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const PageSection = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainBg};
  position: relative;
  z-index: -1;
  transition: 1s;
`;

const Navigation = () => {
  return (
    <>
      <SectionContainer>
        <NavigationElem>
          <CompanyIcon />
          <MainMenu />
          <FlexContainer style={{ gap: "50px" }}>
            <AvatarAnchor href="#">
              <Avatar />
              Name
            </AvatarAnchor>
            <Switch />
            <MobileMenu />
          </FlexContainer>
        </NavigationElem>
      </SectionContainer>
      <PageSection>
        <Outlet />
      </PageSection>
    </>
  );
};

export default Navigation;

import styled from "styled-components";
import { ReactComponent as Fork } from "../../utils/navigation.svg";
import { ReactComponent as Search } from "../../utils/searchIcon.svg";
import SectionContainer from "../MainContainer";
import FlexContainer from "../FlexContainer";
import Switch from "./Switch";

const NavigationElem = styled.nav`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1500px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  @media (max-width: 1278px) {
    display: none;
  }
`;
const SvgFork = styled.div`
  width: 44px;
  height: 44px;
  background-color: #8baa36;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Anchor = styled.a`
  &:hover {
    color: #8baa36;
  }
`;
const AvatarAnchor = styled.a`
  display: flex;
  align-items: center;
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

const Navigation = () => {
  return (
    <SectionContainer>
      <NavigationElem>
        <Anchor href="#">
          <SvgFork>
            <Fork />
          </SvgFork>
        </Anchor>
        <NavList>
          <li>
            <Anchor href="#">Categories</Anchor>
          </li>
          <li>
            <Anchor href="#">Add recipes</Anchor>
          </li>
          <li>
            <Anchor href="#">My recipes</Anchor>
          </li>
          <li>
            <Anchor href="#">Favorites</Anchor>
          </li>
          <li>
            <Anchor href="#">Shopping list</Anchor>
          </li>
          <li>
            <Anchor href="#">
              <Search />
            </Anchor>
          </li>
        </NavList>
        <FlexContainer style={{ gap: "50px" }}>
          <AvatarAnchor href="#">
            <Avatar />
            Name
          </AvatarAnchor>
          <Switch />
        </FlexContainer>
      </NavigationElem>
    </SectionContainer>
  );
};

export default Navigation;

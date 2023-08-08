import styled from "styled-components";
import { ReactComponent as Fork } from "../utils/navigation.svg";

const NavigationElem = styled.nav`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1500px;
`;

const NavList = styled.ul`
  list-style: none;
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
  text-decoration: none;
  color: #000;
  &:hover {
    color: #8baa36;
  }
`;

const Navigation = () => {
  return (
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
          <Anchor href="#">Search</Anchor>
        </li>
      </NavList>
      <span>
        <Anchor href="#">Avatar</Anchor>
        <Anchor href="#">Light/Dark Mode</Anchor>
      </span>
    </NavigationElem>
  );
};

export default Navigation;

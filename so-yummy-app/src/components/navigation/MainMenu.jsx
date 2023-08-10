import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from "../../utils/searchIcon.svg";

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  @media (max-width: 1278px) {
    display: none;
  }
`;

const Anchor = styled.a`
  &:hover {
    color: #8baa36;
  }
`;

const Search = styled(SearchIcon)`
  &:hover path {
    stroke: #8baa36;
  }
`;

const MainMenu = () => {
  return (
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
  );
};

export default MainMenu;

import { styled } from 'styled-components';
import { ReactComponent as SearchIcon } from '../../utils/searchIcon.svg';
import { NavLinks } from '../reusableComponents/Buttons';

const NavList = styled.ul`
    display: flex;
    gap: 30px;
    @media (max-width: 1278px) {
        display: none;
    }
`;

const Search = styled(SearchIcon)`
    path {
        transition: 1s;
        stroke: ${({ theme }) => theme.mainTextColor};
    }
    &:hover path {
        stroke: #8baa36;
    }
`;

const MainMenu = ({ style }) => {
    return (
        <NavList style={style}>
            <li>
                <NavLinks to="/home/categories/beef">Categories</NavLinks>
            </li>
            <li>
                <NavLinks href="#">Add recipes</NavLinks>
            </li>
            <li>
                <NavLinks href="#">My recipes</NavLinks>
            </li>
            <li>
                <NavLinks href="#">Favorites</NavLinks>
            </li>
            <li>
                <NavLinks href="#">Shopping list</NavLinks>
            </li>
            <li>
                <NavLinks href="#">
                    <Search />
                </NavLinks>
            </li>
        </NavList>
    );
};

export { NavList };
export default MainMenu;

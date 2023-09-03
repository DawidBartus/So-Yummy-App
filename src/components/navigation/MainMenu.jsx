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

const MainMenu = ({ style, close }) => {
    return (
        <NavList style={style}>
            <li>
                <NavLinks to="/home/categories/Beef" onClick={close}>
                    Categories
                </NavLinks>
            </li>
            <li>
                <NavLinks href="#" onClick={close}>
                    Add recipes
                </NavLinks>
            </li>
            <li>
                <NavLinks href="#" onClick={close}>
                    My recipes
                </NavLinks>
            </li>
            <li>
                <NavLinks href="#" onClick={close}>
                    Favorites
                </NavLinks>
            </li>
            <li>
                <NavLinks href="#" onClick={close}>
                    Shopping list
                </NavLinks>
            </li>
            <li>
                <NavLinks to={'/home/search'} onClick={close}>
                    <Search />
                </NavLinks>
            </li>
        </NavList>
    );
};

export { NavList };
export default MainMenu;

import styled from 'styled-components';

const NavigationElem = styled.nav`
    position: relative;
    padding-top: 18px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1440px;
`;

const AvatarAnchor = styled.div`
    cursor: pointer;
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
const NavFlexContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 50px;
`;

export { NavFlexContainer, Avatar, AvatarAnchor };
export default NavigationElem;

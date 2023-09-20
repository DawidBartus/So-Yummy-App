import styled from 'styled-components';

const FavSection = styled.section`
    width: 100%;
`;

const FavListElement = styled.li`
    background-color: ${({ theme }) => theme.standardLightGreen};
    margin-bottom: 15px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.standardGreen};
    }
`;
export { FavListElement };
export default FavSection;

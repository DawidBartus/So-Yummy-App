import styled from 'styled-components';

const FavSection = styled.section`
    width: 100%;
`;

const FavListElement = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.standardLightGreen};
    &:hover {
        background-color: ${({ theme }) => theme.standardGreen};
    }
`;
export { FavListElement };
export default FavSection;

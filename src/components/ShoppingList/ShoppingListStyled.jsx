import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    transition: 500ms;
    cursor: default;
    border-radius: 8px;
    padding: 4px 8px;
    &:hover {
        background-color: ${({ theme }) => theme.transparentBg};
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const ListContainer = styled.div`
    width: 100%;
    max-width: 500px;
    @media (min-width: 768px) {
        margin: 0 20px;
    }
`;

const ListHolder = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
`;
export { ListContainer, ListHolder };
export default ListItem;

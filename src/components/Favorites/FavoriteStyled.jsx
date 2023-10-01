import styled from 'styled-components';
import { SubsectionHeader } from '../reusableComponents/Headers';

const FavSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const FavHeader = styled(SubsectionHeader)`
    margin-bottom: 30px;
    width: 100%;
`;

export { FavListElement, FavHeader };
export default FavSection;

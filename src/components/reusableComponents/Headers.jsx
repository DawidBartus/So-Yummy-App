import { styled } from 'styled-components';

// const MainHeader = styled.h1``;
const SectionHeader = styled.h2`
    transition: 500ms;
    font-feature-settings: 'liga' off;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.88px;
    color: ${({ theme }) => theme.headers};
    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

const LightSectionHeader = styled(SectionHeader)`
    color: ${({ theme }) => theme.standardWhite};
`;
const FormHeader = styled.h2`
    color: #fafafa;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.56px;
    margin-bottom: 8px;
`;

const SubsectionHeader = styled.h3`
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 100% */
    letter-spacing: 0.42px;
    color: ${({ theme }) => theme.headers};
`;

const RecipeHeader = styled(SectionHeader)`
    color: ${({ theme }) => theme.standardGreen};
`;

export { SectionHeader, SubsectionHeader, LightSectionHeader, RecipeHeader };
export default FormHeader;

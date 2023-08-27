import { styled } from 'styled-components';

const HeaderSection = styled.header`
    width: 100%;
    transition: background-color 1s ease;
    background-color: ${({ theme }) => theme.mainBg};
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

const MainSection = styled.main`
    width: 100%;
    transition: background-color 1s ease;
    background-color: ${({ theme }) => theme.mainBg};
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

const PageSection = styled.section`
    min-height: 100px;
    background-color: ${({ theme }) => theme.mainBg};
    transition: 1s;
`;

const SignInUpSection = styled(PageSection)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    position: relative;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.standardWhite};

    @media (min-width: 768px) {
        justify-content: space-evenly;
    }
    @media (min-width: 1279px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;
const OutletSection = styled.section`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const BlackToGreenSection = styled.footer`
    background-color: ${({ theme }) => theme.darkToGreen};
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    transition: 10s;
`;

export {
    SignInUpSection,
    BlackToGreenSection,
    HeaderSection,
    MainSection,
    OutletSection,
};
export default PageSection;

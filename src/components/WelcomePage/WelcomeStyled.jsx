import styled from 'styled-components';
import HomePicture from '../../utils/mainPagePicture.png';

const WelcomePageSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 35px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.standardWhite};
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 46.3%,
            rgba(0, 0, 0, 0.35) 72.75%,
            rgba(0, 0, 0, 0) 100%
        ),
        url(${HomePicture}) bottom / cover no-repeat;
`;

const Header = styled.h1`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.48px;
    margin: 28px 0 14px 0;
`;
const WelcomeParagraph = styled.p`
    width: 100%;
    max-width: 500px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-bottom: 44px;
`;
export { WelcomeParagraph, Header };
export default WelcomePageSection;

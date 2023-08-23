import { styled } from "styled-components";
import HomePicture from "../../utils/mainPagePicture.png";
import CompanyIcon from "../reusableComponents/CompanyIcon";
import {
  GreenToBlackBtn,
  TransparentToBlackBtn,
} from "../reusableComponents/Buttons";

const HomeSection = styled.section`
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
const HomeParagraph = styled.p`
  width: 100%;
  max-width: 500px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 44px;
`;

const Home = () => {
  return (
    <HomeSection>
      <CompanyIcon />
      <Header>Welcome to the app!</Header>
      <HomeParagraph>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </HomeParagraph>
      <div style={{ display: "flex", gap: "18px" }}>
        <GreenToBlackBtn to={"/signUp"}>Register</GreenToBlackBtn>
        <TransparentToBlackBtn to={"/signIn"}>Sign in</TransparentToBlackBtn>
      </div>
    </HomeSection>
  );
};

export default Home;

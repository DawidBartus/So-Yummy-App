import { styled } from "styled-components";
import People from "./People";

const NotFoundSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 35px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.mainBg};
`;
const Header = styled.h1`
  color: ${({ theme }) => theme.mainTextColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.36px;
`;

const NotFound = () => {
  return (
    <NotFoundSection>
      <People />
      <Header>We are sorry.</Header>
      <p>but the page you were looking for can't be found.</p>
    </NotFoundSection>
  );
};

export default NotFound;

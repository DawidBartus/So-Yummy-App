import { styled } from "styled-components";

const PageSection = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainBg};
  position: relative;
  z-index: -1;
  transition: 1s;
`;

const SignInUpSection = styled(PageSection)`
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

export { SignInUpSection };
export default PageSection;

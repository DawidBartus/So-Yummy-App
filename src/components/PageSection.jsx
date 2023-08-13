import { styled } from "styled-components";

const PageSection = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainBg};
  position: relative;
  z-index: -1;
  transition: 1s;
`;

export default PageSection;

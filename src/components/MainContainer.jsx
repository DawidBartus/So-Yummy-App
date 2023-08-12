import { styled } from "styled-components";

const SectionContainer = styled.section`
  transition: background-color 2s ease;
  background-color: ${({ theme }) => theme.mainBg};
  display: flex;
  justify-content: center;
`;

export default SectionContainer;

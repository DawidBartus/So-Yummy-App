import { styled } from "styled-components";

const SectionContainer = styled.section`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  transition: background-color 1s ease;
  background-color: ${({ theme }) => theme.mainBg};
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export default SectionContainer;

import { styled } from "styled-components";

const TextParagraph = styled.p`
  transition: 500ms;
  color: ${({ theme }) => theme.mainTextColor};
`;

export default TextParagraph;

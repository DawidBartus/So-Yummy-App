import { styled } from "styled-components";

const TextParagraph = styled.p`
  transition: 500ms;
  font-family: Poppins;
  color: ${({ theme }) => theme.mainTextColor};
  font-style: normal;
`;

const bigParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.36px;
`;
const mediumParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`;
const smallParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

export { bigParagraph, mediumParagraph, smallParagraph };
export default TextParagraph;

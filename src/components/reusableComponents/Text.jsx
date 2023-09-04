import { styled } from 'styled-components';

const TextParagraph = styled.p`
    transition: 500ms;
    font-family: Poppins;
    color: ${({ theme }) => theme.mainTextColor};
    font-style: normal;
`;

const BigParagraph = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.36px;
`;
const MediumParagraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
`;
const SmallParagraph = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.28px;
`;

export { BigParagraph, MediumParagraph, SmallParagraph };
export default TextParagraph;

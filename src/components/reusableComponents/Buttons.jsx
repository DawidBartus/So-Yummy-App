import { Link } from "react-router-dom";
import { styled } from "styled-components";

// styled Link
const Button = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 500ms;
  padding: 12px 24px;
`;
const RoundedLinkBtn = styled(Button)`
  border-radius: 24px 44px;
  &:hover {
    border-radius: 44px 24px;
  }
`;
const StyledLink = styled(Button)`
  padding: 0px;
  color: ${({ theme }) => theme.mainTextColor};
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.standardGreen};
  }
`;

const GreenToBlackBtn = styled(RoundedLinkBtn)`
  border: 1px solid ${({ theme }) => theme.blackToGreen};
  background-color: ${({ theme }) => theme.standardGreen};
  &:hover {
    border: 1px solid ${({ theme }) => theme.standardGreen};
    background-color: ${({ theme }) => theme.standardBlack};
    color: ${({ theme }) => theme.standardWhite};
  }
`;

const TransparentToBlackBtn = styled(RoundedLinkBtn)`
  border: 1px solid ${({ theme }) => theme.standardWhite};
  background-color: transparent;
  color: ${({ theme }) => theme.standardWhite};
  &:hover {
    background-color: ${({ theme }) => theme.standardBlack};
  }
`;

const UnderFormButton = styled(RoundedLinkBtn)`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.standardWhite};
  text-decoration: underline;
  background-color: ${({ theme }) => theme.standardDarkBlack};
`;

const AllGreenBtn = styled(RoundedLinkBtn)`
  border: 1px solid ${({ theme }) => theme.standardGreen};
  background-color: ${({ theme }) => theme.standardGreen};
  color: ${({ theme }) => theme.standardWhite};
`;

// styled button
const basisBtn = styled.button`
  transition: 500ms;
  padding: 17px 0;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const FormButton = styled(basisBtn)`
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.standardGreen};
  background-color: ${({ theme }) => theme.standardGreen};
  &:hover {
    color: ${({ theme }) => theme.standardGreen};
    background-color: ${({ theme }) => theme.standardBlack};
  }
`;
const MirrorFormButton = styled(basisBtn)`
  width: 100%;
  max-width: 400px;
  color: ${({ theme }) => theme.standardWhite};
  background-color: ${({ theme }) => theme.standardBlack};
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }) => theme.standardGreen};
    background-color: ${({ theme }) => theme.standardGreen};
  }
`;

const RoundedBtn = styled(basisBtn)`
  cursor: pointer;
  transition: 500ms;
  padding: 12px 32px;
  border-radius: 24px 44px;
  &:hover {
    border-radius: 44px 24px;
  }
`;

const RoundedGreenToDark = styled(RoundedBtn)`
  background-color: ${({ theme }) => theme.standardGreen};
  border: 1px solid ${({ theme }) => theme.standardGreen};
  &:hover {
    background-color: ${({ theme }) => theme.standardBlack};
    color: ${({ theme }) => theme.standardWhite};
  }
`;

export {
  GreenToBlackBtn,
  TransparentToBlackBtn,
  FormButton,
  UnderFormButton,
  AllGreenBtn,
  StyledLink,
  RoundedBtn,
  RoundedLinkBtn,
  RoundedGreenToDark,
  MirrorFormButton,
};
export default Button;

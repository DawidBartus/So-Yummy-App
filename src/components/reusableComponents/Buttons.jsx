import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Button = styled(Link)`
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 24px 44px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 1s;
`;
const FormButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 17px 0;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.standardGreen};
  background-color: ${({ theme }) => theme.standardGreen};
  &:hover {
    color: ${({ theme }) => theme.standardGreen};
    background-color: ${({ theme }) => theme.standardBlack};
  }
`;

const RegisterButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.buttonNormal};
  background-color: ${({ theme }) => theme.standardGreen};
  &:hover {
    border-radius: 44px 24px;
    border: 1px solid ${({ theme }) => theme.standardGreen};
    background-color: ${({ theme }) => theme.standardBlack};
    color: ${({ theme }) => theme.standardWhite};
  }
`;
const SignInButton = styled(Button)`
  margin-left: 18px;
  border: 1px solid ${({ theme }) => theme.standardWhite};
  background-color: transparent;
  color: ${({ theme }) => theme.standardWhite};
  &:hover {
    border-radius: 44px 24px;
    background-color: ${({ theme }) => theme.standardBlack};
  }
`;

export { RegisterButton, SignInButton, FormButton };
export default Button;

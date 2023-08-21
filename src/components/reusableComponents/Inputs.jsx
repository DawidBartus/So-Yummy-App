import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.standardFormBlack};
  display: flex;
  flex-direction: column;
  padding: 44px 50px;
  border-radius: 30px;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  z-index: 1;
  position: relative;
`;

const MainInput = styled.input`
  background-color: transparent;
  padding: 12px 40px;
  color: ${({ theme }) => theme.standardWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.standardWhite};
  border-radius: 6px;
  position: relative;
  @media (min-width: 768px) {
    padding: 16px 40px;
  }
`;
const NameStyledInput = styled(MainInput)`
  width: 100%;
  box-sizing: border-box;
`;
const IconContainer = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
const InputHolder = styled.div`
  position: relative;
`;
const Icon = styled(FontAwesomeIcon)`
  width: 12px;
  height: auto;
  @media (min-width: 768px) {
    width: 16px;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 16px;
    height: auto;
  }
`;

const NameInput = ({ setInputName }) => {
  return (
    <InputHolder>
      <NameStyledInput
        placeholder="Name"
        id="name"
        type="text"
        onChange={setInputName}
      ></NameStyledInput>
      <IconContainer>
        <Icon icon={faUser} color="#FAFAFA" />
      </IconContainer>
    </InputHolder>
  );
};
const EmailInput = ({ setInputEmail }) => {
  return (
    <InputHolder>
      <NameStyledInput
        placeholder="Email"
        id="email"
        type="email"
        onChange={setInputEmail}
      ></NameStyledInput>
      <IconContainer>
        <Icon icon={faEnvelope} color="#FAFAFA" />
      </IconContainer>
    </InputHolder>
  );
};
const PasswordInput = ({ setInputPassword }) => {
  return (
    <InputHolder>
      <NameStyledInput
        placeholder="Password"
        id="password"
        type="password"
        onChange={setInputPassword}
      ></NameStyledInput>
      <IconContainer>
        <Icon icon={faLock} color="#FAFAFA" />
      </IconContainer>
    </InputHolder>
  );
};
export { FormContainer, NameInput, EmailInput, PasswordInput };
export default MainInput;

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
`;

const MainInput = styled.input`
  background-color: transparent;
  padding: 16px 40px;
  color: ${({ theme }) => theme.standardWhite};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.standardWhite};
  border-radius: 6px;
  position: relative;
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

const NameInput = () => {
  return (
    <InputHolder>
      <NameStyledInput placeholder="Name" type="text"></NameStyledInput>
      <IconContainer>
        <FontAwesomeIcon icon={faUser} color="#FAFAFA" />
      </IconContainer>
    </InputHolder>
  );
};
const EmailInput = () => {
  return (
    <InputHolder>
      <NameStyledInput placeholder="Email" type="email"></NameStyledInput>
      <IconContainer>
        <FontAwesomeIcon icon={faEnvelope} color="#FAFAFA" />
      </IconContainer>
    </InputHolder>
  );
};
const PasswordInput = () => {
  return (
    <InputHolder>
      <NameStyledInput placeholder="Password" type="password"></NameStyledInput>
      <IconContainer>
        <FontAwesomeIcon icon={faLock} color="#FAFAFA" />
      </IconContainer>
    </InputHolder>
  );
};
export { FormContainer, NameInput, EmailInput, PasswordInput };
export default MainInput;

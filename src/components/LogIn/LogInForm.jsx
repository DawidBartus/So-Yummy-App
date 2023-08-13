import { styled } from "styled-components";
import LogInSVG from "../reusableComponents/LogInSVG";
import PageSection from "../PageSection";
import MainInput, {
  EmailInput,
  FormContainer,
  NameInput,
  PasswordInput,
} from "../reusableComponents/Inputs";
import FormHeader from "../reusableComponents/Headers";
import { FormButton } from "../reusableComponents/Buttons";

const SpecialBgComponent = styled.div`
  height: 490px;
  width: 100%;
  background-color: ${({ theme }) => theme.standardDarkBlack};
  clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%, 50% 20%);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  @media (min-width: 768px) {
    height: 606px;
  }
  @media (min-width: 1279px) {
    height: 325px;
  }
`;
const LogInPageSection = styled(PageSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.standardWhite};
`;

const LogInForm = () => {
  return (
    <LogInPageSection>
      <LogInSVG></LogInSVG>
      <FormContainer>
        <FormHeader>Registration</FormHeader>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <FormButton>Sign up</FormButton>
      </FormContainer>
      <SpecialBgComponent />
    </LogInPageSection>
  );
};

export default LogInForm;

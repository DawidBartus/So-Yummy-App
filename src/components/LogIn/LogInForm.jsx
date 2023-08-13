import { SignInUpSection } from "../PageSection";
import { FormButton, UnderFormButton } from "../reusableComponents/Buttons";
import FormHeader from "../reusableComponents/Headers";
import {
  EmailInput,
  FormContainer,
  PasswordInput,
} from "../reusableComponents/Inputs";
import LogInSVG from "../reusableComponents/LogInSVG";
import SpecialBgComponent from "../reusableComponents/SpecialBackground";

const LogInForm = () => {
  return (
    <SignInUpSection>
      <LogInSVG />
      <FormContainer>
        <FormHeader>Sign in</FormHeader>
        <EmailInput />
        <PasswordInput />
        <FormButton>Sign in</FormButton>
        <UnderFormButton to={"/signUp"}>Register</UnderFormButton>
      </FormContainer>
      <SpecialBgComponent />
    </SignInUpSection>
  );
};

export default LogInForm;

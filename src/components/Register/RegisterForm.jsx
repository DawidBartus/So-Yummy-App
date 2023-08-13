import LogInSVG from "../reusableComponents/LogInSVG";
import { SignInUpSection } from "../PageSection";
import {
  EmailInput,
  FormContainer,
  NameInput,
  PasswordInput,
} from "../reusableComponents/Inputs";
import FormHeader from "../reusableComponents/Headers";
import { FormButton, UnderFormButton } from "../reusableComponents/Buttons";
import SpecialBgComponent from "../reusableComponents/SpecialBackground";

const RegisterForm = () => {
  return (
    <SignInUpSection>
      <LogInSVG />
      <FormContainer onSubmit={{}}>
        <FormHeader>Registration</FormHeader>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <FormButton type="submit">Sign up</FormButton>
        <UnderFormButton to={"/signIn"}>Sign in</UnderFormButton>
      </FormContainer>
      <SpecialBgComponent />
    </SignInUpSection>
  );
};

export default RegisterForm;

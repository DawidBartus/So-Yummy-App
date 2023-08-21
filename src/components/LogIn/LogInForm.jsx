import { useState } from "react";
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
import { useNavigate } from "react-router";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // In this stage of project i skip verification
    // Check user credentials
    if (email && password) {
      navigate("/home");
    }
  };

  return (
    <SignInUpSection>
      <LogInSVG />
      <FormContainer onSubmit={handleSignIn}>
        <FormHeader>Sign in</FormHeader>
        <EmailInput setInputEmail={handleEmailChange} />
        <PasswordInput setInputPassword={handlePasswordChange} />
        <FormButton>Sign in</FormButton>
        <UnderFormButton to={"/signUp"}>Register</UnderFormButton>
      </FormContainer>
      <SpecialBgComponent />
    </SignInUpSection>
  );
};

export default LogInForm;

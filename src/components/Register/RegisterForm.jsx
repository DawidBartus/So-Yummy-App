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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // In this stage of project i skip verification
    // Check user credentials
    if (name && email && password) {
      navigate("/home");
    }
  };

  return (
    <SignInUpSection>
      <LogInSVG />
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>Registration</FormHeader>
        <NameInput setInputName={handleNameChange} />
        <EmailInput setInputEmail={handleEmailChange} />
        <PasswordInput setInputPassword={handlePasswordChange} />
        <FormButton type="submit">Sign up</FormButton>
        <UnderFormButton to={"/signIn"}>Sign in</UnderFormButton>
      </FormContainer>
      <SpecialBgComponent />
    </SignInUpSection>
  );
};

export default RegisterForm;

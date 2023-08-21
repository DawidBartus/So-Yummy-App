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
  const [error, setError] = useState({});
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // In this stage of project i skip verification
    // Check user credentials

    if (formValues.email && formValues.password) {
      navigate("/home");
    }
  };

  return (
    <SignInUpSection>
      <LogInSVG />
      <FormContainer onSubmit={handleSignIn}>
        <FormHeader>Sign in</FormHeader>
        <EmailInput setInputEmail={handleInputChange} />
        <PasswordInput setInputPassword={handleInputChange} />
        <FormButton>Sign in</FormButton>
        <UnderFormButton to={"/signUp"}>Register</UnderFormButton>
      </FormContainer>
      <SpecialBgComponent />
    </SignInUpSection>
  );
};

export default LogInForm;

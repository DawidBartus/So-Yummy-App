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
  const [formValues, setFormValues] = useState({
    name: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // In this stage of project i skip verification
    // Check user credentials
    if (formValues.name && formValues.email && formValues.password) {
      navigate("/home");
    }
  };

  return (
    <SignInUpSection>
      <LogInSVG />
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>Registration</FormHeader>
        <NameInput setInputName={handleInputChange} />
        <EmailInput setInputEmail={handleInputChange} />
        <PasswordInput setInputPassword={handleInputChange} />
        <FormButton type="submit">Sign up</FormButton>
        <UnderFormButton to={"/signIn"}>Sign in</UnderFormButton>
      </FormContainer>
      <SpecialBgComponent />
    </SignInUpSection>
  );
};

export default RegisterForm;

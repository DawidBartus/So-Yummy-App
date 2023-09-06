import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

const FormContainer = styled.form`
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
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.standardFormBlack};
`;

const MainInput = styled.input`
    background-color: transparent;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.36px;
    padding: 12px 40px;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.standardWhite};
    color: ${({ theme }) => theme.standardWhite};
    @media (min-width: 768px) {
        padding: 16px 40px;
    }
    &::placeholder {
        color: ${({ theme }) => theme.standardWhite};
    }
    &:focus {
        outline: none;
    }
`;

const StyledInput = styled(MainInput)`
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
    width: 100%;
    min-width: 150px;
    max-width: 400px;
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
            <StyledInput
                placeholder="Name"
                id="name"
                type="text"
                onChange={setInputName}
            ></StyledInput>
            <IconContainer>
                <Icon icon={faUser} color="#FAFAFA" />
            </IconContainer>
        </InputHolder>
    );
};
const EmailInput = ({ setInputEmail, placeholder = 'Email' }) => {
    return (
        <InputHolder>
            <StyledInput
                placeholder={placeholder}
                id="email"
                type="email"
                onChange={setInputEmail}
            ></StyledInput>
            <IconContainer>
                <Icon icon={faEnvelope} color="#FAFAFA" />
            </IconContainer>
        </InputHolder>
    );
};
const PasswordInput = ({ setInputPassword }) => {
    return (
        <InputHolder>
            <StyledInput
                placeholder="Password"
                id="password"
                type="password"
                onChange={setInputPassword}
            ></StyledInput>
            <IconContainer>
                <Icon icon={faLock} color="#FAFAFA" />
            </IconContainer>
        </InputHolder>
    );
};

// Test - go to /home/Dev
const UniversalInput = ({ setInput, placeholder, inputId, inputType }) => {
    const icon = () => {
        if (inputType === 'password') {
            return faLock;
        } else if (inputType === 'email') {
            return faEnvelope;
        } else if (inputType === 'text') {
            return faUser;
        } else {
            return;
        }
    };

    return (
        <div>
            <InputHolder>
                <StyledInput
                    placeholder={placeholder}
                    id={inputId}
                    type={inputType}
                    onChange={setInput}
                ></StyledInput>
                <IconContainer>
                    <Icon icon={icon()} color="#FAFAFA" />
                </IconContainer>
            </InputHolder>
        </div>
    );
};

export { FormContainer, NameInput, EmailInput, PasswordInput, UniversalInput };
export default MainInput;

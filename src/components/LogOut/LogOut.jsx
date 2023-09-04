import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import {
    StyledLink,
    FormButton,
    RoundedGreenToDark,
    MirrorFormButton,
} from '../reusableComponents/Buttons';
import { useState } from 'react';
import FlexContainer from '../FlexContainer';
import TextParagraph from '../reusableComponents/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal/Modal';

const LogOutContainer = styled.div`
    position: absolute;
    bottom: -170px;
    left: -50px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 18px;
    border-radius: 8px;
    z-index: 2;
    background-color: ${({ theme }) => theme.mainBg};
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
    transition: opacity 500ms, background 1s;
    color: ${({ theme }) => theme.mainTextColor};
`;

const LogOutModal = ({ toggleModal, logOutFunc }) => {
    return (
        <>
            <TextParagraph style={{ marginBottom: '26px' }}>
                Are you sure you want to log out?
            </TextParagraph>
            <FlexContainer style={{ gap: '10px' }}>
                <FormButton onClick={logOutFunc}>Yes</FormButton>
                <MirrorFormButton onClick={toggleModal} data-close="close">
                    No
                </MirrorFormButton>
            </FlexContainer>
        </>
    );
};

const LogOut = ({ visible }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/');
    };
    // modal controller
    const [isOpen, setLogOut] = useState(false);
    const toggleModal = (e) => {
        e.stopPropagation();
        const target = e.target.getAttribute('data-close');
        if (target === 'close') {
            setLogOut((prev) => !prev);
        }
    };

    return (
        <>
            <LogOutContainer $visible={visible}>
                <StyledLink to={'/edit'}>
                    Edit profile
                    <FontAwesomeIcon
                        style={{ marginLeft: '37px' }}
                        icon={faPencil}
                    />
                </StyledLink>
                <RoundedGreenToDark onClick={toggleModal} data-close="close">
                    Log out
                </RoundedGreenToDark>
            </LogOutContainer>

            <Modal $showModal={isOpen} onClick={toggleModal} data-close="close">
                <LogOutModal
                    $logOut={isOpen}
                    onClick={toggleModal}
                    logOutFunc={handleLogOut}
                />
            </Modal>
        </>
    );
};

export default LogOut;

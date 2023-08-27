import { styled } from 'styled-components';

const LogOutSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: 500ms;
    z-index: 999;
    opacity: ${({ $showModal }) => ($showModal ? 1 : 0)};
    pointer-events: ${({ $showModal }) => ($showModal ? 'auto' : 'none')};
    background-color: ${({ theme }) => theme.transparentBg};
`;

const CenteredModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 280px;
    padding: 44px 24px;
    border-radius: 6px;
    text-align: center;
    background-color: ${({ theme }) => theme.mainBg};
`;

// Modal takes: showModal = true /false
// onClick - toggleModal Function
// children
const ModalTest = (props) => {
    return (
        <LogOutSection
            $showModal={props.$showModal}
            onClick={props.onClick}
            data-close="close"
        >
            <CenteredModal>{props.children}</CenteredModal>
        </LogOutSection>
    );
};

export { CenteredModal, ModalTest };
export default LogOutSection;

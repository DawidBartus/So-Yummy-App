import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: 500ms;
    z-index: 999;
    background-color: ${({ theme }) => theme.transparentBg};
`;

const loaderAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Spinner = styled.span`
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;

    &::after,
    &::before {
        content: '';
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid #fff;
        position: absolute;
        left: 0;
        top: 0;
        animation: ${loaderAnimation} 2s linear infinite;
    }

    &::after {
        animation-delay: 1s;
    }
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <Spinner></Spinner>
        </LoaderWrapper>
    );
};
export default Loader;

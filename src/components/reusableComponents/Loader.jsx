import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
    transition: 500ms;
`;
const FixedWrapper = styled.div`
    transition: 500ms;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${({ theme }) => theme.standardLightGreen};
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
    transform: translate(-50%, -50%);
    &::after,
    &::before {
        content: '';
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        animation: ${loaderAnimation} 2s linear infinite;
        border: 5px solid ${({ theme }) => theme.standardGreen};
    }

    &::after {
        animation-delay: 1s;
    }
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <Spinner />
        </LoaderWrapper>
    );
};

const FixedLoader = () => {
    return (
        <FixedWrapper>
            <Spinner />
        </FixedWrapper>
    );
};

export { FixedLoader };
export default Loader;

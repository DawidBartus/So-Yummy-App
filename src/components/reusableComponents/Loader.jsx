import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
    position: relative;
    transition: 500ms;
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
        border: 5px solid ${({ theme }) => theme.standardGreen};
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
            <Spinner />
        </LoaderWrapper>
    );
};
export default Loader;

import { styled } from 'styled-components';

const SpecialBgComponent = styled.div`
    height: 490px;
    width: 100%;
    background-color: ${({ theme }) => theme.standardDarkBlack};
    clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%, 50% 20%);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    @media (min-width: 768px) {
        height: 606px;
    }
    @media (min-width: 1279px) {
        height: 44%;
    }
`;

export default SpecialBgComponent;

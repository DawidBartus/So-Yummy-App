import { styled, keyframes } from "styled-components";
import { ReactComponent as MainSVG } from "../../utils/login.svg";
import { ReactComponent as Chinese } from "../../utils/chinese.svg";

const MainSvg = styled(MainSVG)`
  position: relative;
`;

const wobble = keyframes`
  0%,
  2%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }

  4% {
    transform: translateX(-30px) rotate(-6deg);
  }

  6% {
    transform: translateX(15px) rotate(6deg);
  }

  8% {
    transform: translateX(-15px) rotate(-3.6deg);
  }

  10% {
    transform: translateX(9px) rotate(2.4deg);
  }

  12% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
  14% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
`;

const ChineseFood = styled(Chinese)`
  position: absolute;
  top: 102px;
  left: 162px;
  overflow: visible;
  & path {
    animation: ${wobble} 15s linear infinite;
  }
`;

const SvgContainer = styled.div`
  scale: 0.53;
  @media (min-width: 768px) {
    scale: 0.76;
  }
  @media (min-width: 1279px) {
    scale: 1;
  }
`;

const LogInSVG = () => {
  return (
    <SvgContainer>
      <MainSvg></MainSvg>
      <ChineseFood></ChineseFood>
    </SvgContainer>
  );
};

export default LogInSVG;

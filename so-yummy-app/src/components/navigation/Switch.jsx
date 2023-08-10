import { styled } from "styled-components";

const SwitchLabel = styled.label`
  display: none;
  position: relative;

  width: 61px;
  height: 27px;
  @media (min-width: 1279px) {
    display: inline-block;
  }
`;
const Input = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
  &:checked + span {
    background-color: #8baa36;
  }
  &:checked + span::before {
    transform: translateX(30px);
    box-shadow: 8px 8px 24px 0px #8baa36;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  transition: 2s;
  border-radius: 50px;
  &::before {
    content: "";
    position: absolute;
    height: 21px;
    width: 21px;
    left: 4px;
    bottom: 3px;
    background: linear-gradient(180deg, #fff 0%, #e8eaea 100%);
    transition: 2s;
    border-radius: 50%;
  }
  &:hover::before {
    box-shadow: -8px 8px 24px 0px #8baa36;
  }
`;

const Switch = () => {
  return (
    <SwitchLabel>
      <Input type="checkbox" name="theme" id="theme" />
      <Slider />
    </SwitchLabel>
  );
};

export default Switch;

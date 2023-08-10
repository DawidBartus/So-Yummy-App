import { styled } from "styled-components";
import { ReactComponent as Fork } from "./navigation.svg";

const Anchor = styled.a`
  &:hover {
    color: #8baa36;
  }
`;

const SvgFork = styled.div`
  width: 44px;
  height: 44px;
  background-color: #8baa36;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompanyIcon = () => {
  return (
    <Anchor href="#">
      <SvgFork>
        <Fork />
      </SvgFork>
    </Anchor>
  );
};
export default CompanyIcon;

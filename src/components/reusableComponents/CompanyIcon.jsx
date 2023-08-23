import { styled } from "styled-components";
import { ReactComponent as Fork } from "../../utils/navigation.svg";
import { StyledLink } from "./Buttons";

const SvgFork = styled.div`
  width: 44px;
  height: 44px;
  background-color: #8baa36;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompanyIcon = ({ close }) => {
  return (
    <StyledLink to="/home/Dev" onClick={close}>
      <SvgFork>
        <Fork />
      </SvgFork>
    </StyledLink>
  );
};
export default CompanyIcon;

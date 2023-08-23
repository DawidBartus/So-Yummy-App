import { styled } from "styled-components";

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

export default CenteredModal;

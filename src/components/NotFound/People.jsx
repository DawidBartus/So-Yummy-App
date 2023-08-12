import { styled } from "styled-components";
import { ReactComponent as PeopleSvg } from "../../utils/people.svg";

const People = styled(PeopleSvg)`
  scale: 0.52;
  @media (min-width: 768px) {
    scale: 1;
  }
`;
export default People;

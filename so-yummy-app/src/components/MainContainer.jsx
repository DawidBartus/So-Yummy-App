import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const Section = styled.section`
  background-color: rebeccapurple;
`;

const MainContainer = () => {
  return (
    <Section>
      <Outlet />
    </Section>
  );
};

export default MainContainer;

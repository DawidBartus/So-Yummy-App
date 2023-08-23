import { styled } from "styled-components";
import FlexContainer from "../FlexContainer";
import { GreenSection } from "../PageSection";
import { MirrorFormButton, StyledLink } from "../reusableComponents/Buttons";
import { EmailInput } from "../reusableComponents/Inputs";

const WhiteLink = styled(StyledLink)`
  color: ${({ theme }) => theme.standardWhite};
`;

const Footer = () => {
  return (
    <GreenSection>
      <FlexContainer style={{ flexDirection: "column", gap: 10 }}>
        <WhiteLink>Ingredients</WhiteLink>
        <WhiteLink>Add recipes</WhiteLink>
        <WhiteLink>My recipes</WhiteLink>
        <WhiteLink>Favorite</WhiteLink>
        <WhiteLink>Shopping list</WhiteLink>
      </FlexContainer>
      <form action="" style={{ padding: "32px 80px" }}>
        <EmailInput></EmailInput>
        <MirrorFormButton style={{ marginTop: "20px" }}>
          Subscribe
        </MirrorFormButton>
      </form>
    </GreenSection>
  );
};

export default Footer;

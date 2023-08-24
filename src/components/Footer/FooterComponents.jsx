import { styled } from "styled-components";
import { BlackToGreenSection } from "../reusableComponents/Sections";
import { StyledLink } from "../reusableComponents/Buttons";
import FlexContainer from "../FlexContainer";

const FooterSection = styled(BlackToGreenSection)`
  transition: 1s ease;
  display: flex;
  justify-content: center;
  padding: 18px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const WhiteLink = styled(StyledLink)`
  color: ${({ theme }) => theme.standardWhite};
`;

const FooterFlexWrapper = styled(FlexContainer)`
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 30px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const ColumnWrapper = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const LinkContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 14px;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 20px;
  }
  @media (min-width: 1279px) {
    align-items: flex-start;
    gap: 24px;
  }
`;

const FooterList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: ${({ theme }) => theme.standardWhite};
    padding-top: 40px;
    max-width: 418px;
  }
  & li {
    padding-bottom: 12px;
    list-style-type: disc;
  }
`;

const FormContainer = styled(FlexContainer)`
  padding: 0 10px;
`;

const NewsletterSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 458px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1279px) {
    flex-direction: column;
  }
`;

export {
  FormContainer,
  FooterList,
  LinkContainer,
  ColumnWrapper,
  FooterFlexWrapper,
  WhiteLink,
  NewsletterSection,
};
export default FooterSection;

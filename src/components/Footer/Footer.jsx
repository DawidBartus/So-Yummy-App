import FlexContainer from '../FlexContainer';
import { BlackToGreenButton } from '../reusableComponents/Buttons';
import { EmailInput } from '../reusableComponents/Inputs';
import { CompanyV2Icon } from '../reusableComponents/CompanyIcon';
import { LightSectionHeader } from '../reusableComponents/Headers';
import FooterSection, {
    FormContainer,
    FooterList,
    LinkContainer,
    ColumnWrapper,
    FooterFlexWrapper,
    WhiteLink,
    NewsletterSection,
    DisplayDiv,
} from './FooterComponents';
import { BigParagraph, SmallParagraph } from '../reusableComponents/Text';

const Footer = () => {
    return (
        <FooterSection>
            <FooterFlexWrapper>
                <ColumnWrapper>
                    <FlexContainer
                        style={{
                            gap: '12px',
                            alignItems: 'center',
                        }}
                    >
                        <CompanyV2Icon />
                        <LightSectionHeader>So Yummy</LightSectionHeader>
                    </FlexContainer>
                    <FooterList>
                        <li>Database of recipes that can be replenished </li>
                        <li>
                            Flexible search for desired and unwanted ingredients
                        </li>
                        <li>Ability to add your own recipes with photos</li>
                        <li>Convenient and easy to use</li>
                    </FooterList>
                </ColumnWrapper>
                <LinkContainer>
                    <WhiteLink>Ingredients</WhiteLink>
                    <WhiteLink>Add recipes</WhiteLink>
                    <WhiteLink>My recipes</WhiteLink>
                    <WhiteLink>Favorite</WhiteLink>
                    <WhiteLink>Shopping list</WhiteLink>
                </LinkContainer>
                <FormContainer>
                    <NewsletterSection action="">
                        <DisplayDiv>
                            <BigParagraph style={{ color: '#fff' }}>
                                Subscribe to our Newsletter
                            </BigParagraph>
                            <SmallParagraph
                                style={{
                                    color: '#fff',
                                    maxWidth: 400,
                                    marginTop: 10,
                                }}
                            >
                                Subscribe up to our newsletter. Be in touch with
                                latest news and special offers, etc.
                            </SmallParagraph>
                        </DisplayDiv>
                        <EmailInput placeholder={'Enter your email address'} />
                        <BlackToGreenButton>Subscribe</BlackToGreenButton>
                    </NewsletterSection>
                </FormContainer>
            </FooterFlexWrapper>
        </FooterSection>
    );
};

export default Footer;

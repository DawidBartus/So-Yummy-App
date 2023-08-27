import FlexContainer from '../FlexContainer';
import { MirrorFormButton } from '../reusableComponents/Buttons';
import { EmailInput } from '../reusableComponents/Inputs';
import { CompanyV2Icon } from '../reusableComponents/CompanyIcon';
import { SubsectionHeader } from '../reusableComponents/Headers';
import FooterSection, {
    FormContainer,
    FooterList,
    LinkContainer,
    ColumnWrapper,
    FooterFlexWrapper,
    WhiteLink,
    NewsletterSection,
} from './FooterComponents';

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
                        <SubsectionHeader>So Yummy</SubsectionHeader>
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
                        <EmailInput placeholder={'Enter your email address'} />
                        <MirrorFormButton>Subscribe</MirrorFormButton>
                    </NewsletterSection>
                </FormContainer>
            </FooterFlexWrapper>
        </FooterSection>
    );
};

export default Footer;

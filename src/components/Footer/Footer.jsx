import FlexContainer from '../reusableComponents/FlexContainer';
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
import TextParagraph, {
    BigParagraph,
    SmallParagraph,
} from '../reusableComponents/Text';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        toggleModal();
        setTimeout(() => setIsOpen(false), 3000);
    };

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
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
                            <li>
                                Database of recipes that can be replenished{' '}
                            </li>
                            <li>
                                Flexible search for desired and unwanted
                                ingredients
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
                        <NewsletterSection action="" onSubmit={handleSubscribe}>
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
                                    Subscribe up to our newsletter. Be in touch
                                    with latest news and special offers, etc.
                                </SmallParagraph>
                            </DisplayDiv>
                            <EmailInput
                                placeholder={'Enter your email address'}
                            />
                            <BlackToGreenButton type="submit">
                                Subscribe
                            </BlackToGreenButton>
                        </NewsletterSection>
                    </FormContainer>
                </FooterFlexWrapper>
            </FooterSection>

            <Modal $showModal={isOpen} onClick={toggleModal} data-close="close">
                <TextParagraph style={{ fontSize: 18 }}>
                    Thank you for subscribing! We've sent you a welcome gift to
                    your email.
                </TextParagraph>
            </Modal>
        </>
    );
};

export default Footer;

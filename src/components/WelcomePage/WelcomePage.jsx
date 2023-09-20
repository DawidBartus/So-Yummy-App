import CompanyIcon from '../reusableComponents/CompanyIcon';
import {
    GreenToBlackBtn,
    TransparentToBlackBtn,
} from '../reusableComponents/Buttons';
import WelcomePageSection, { Header, WelcomeParagraph } from './WelcomeStyled';

const Welcome = () => {
    return (
        <WelcomePageSection>
            <CompanyIcon />
            <Header>Welcome to the app!</Header>
            <WelcomeParagraph>
                This app offers more than just a collection of recipes - it is
                designed to be your very own digital cookbook. You can easily
                save and retrieve your own recipes at any time.
            </WelcomeParagraph>
            <div style={{ display: 'flex', gap: '18px' }}>
                <GreenToBlackBtn to={'/signUp'}>Register</GreenToBlackBtn>
                <TransparentToBlackBtn to={'/signIn'}>
                    Sign in
                </TransparentToBlackBtn>
            </div>
        </WelcomePageSection>
    );
};

export default Welcome;

import { Outlet } from 'react-router';
import Navigation from '../components/navigation/index';
import {
    MainSection,
    OutletSection,
} from '../components/reusableComponents/Sections';
import Footer from '../components/Footer';

const NavigationPage = () => {
    return (
        <>
            <Navigation />
            <MainSection>
                <OutletSection>
                    <Outlet />
                </OutletSection>
            </MainSection>
            <Footer />
        </>
    );
};

export default NavigationPage;

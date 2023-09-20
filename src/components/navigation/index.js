import Switch from './Switch';
import MainMenu from './MainMenu';
import CompanyIcon from '../reusableComponents/CompanyIcon';
import MobileMenu from './MobileMenu/MobileMenu';
import { useState } from 'react';
import LogOut from '../LogOut/LogOut';
import { HeaderSection } from '../reusableComponents/Sections';
import NavigationElem, {
    NavFlexContainer,
    AvatarAnchor,
    Avatar,
} from './NavigationStyled';

const Navigation = ({ modalSettings }) => {
    const [clicked, setClicked] = useState(false);
    const displayLogOut = () => {
        setClicked((prev) => !prev);
    };

    return (
        <HeaderSection>
            <NavigationElem>
                <CompanyIcon />
                <MainMenu />
                <NavFlexContainer>
                    <AvatarAnchor onClick={displayLogOut}>
                        <Avatar />
                        Name
                    </AvatarAnchor>
                    <Switch />
                    <MobileMenu />
                    <LogOut modalSettings={modalSettings} visible={clicked} />
                </NavFlexContainer>
            </NavigationElem>
        </HeaderSection>
    );
};

export default Navigation;

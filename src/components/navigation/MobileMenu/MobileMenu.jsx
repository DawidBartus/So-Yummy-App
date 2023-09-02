import { faX } from '@fortawesome/free-solid-svg-icons';
import CompanyIcon from '../../reusableComponents/CompanyIcon';
import MainMenu from '../MainMenu';
import Switch from '../Switch';
import { useState } from 'react';
import MenuWrapper, {
    switchON,
    mobileCss,
    CenteredFlexContainer,
    CloseIcon,
    BackgroundImage,
    MobileMenuIcon,
    FlexContainer,
} from './MobileMenuStyled';

const MobileList = ({ close, state }) => {
    return (
        <MenuWrapper open={state}>
            <FlexContainer>
                <CompanyIcon close={close} />
                <CloseIcon icon={faX} onClick={close} />
            </FlexContainer>
            <CenteredFlexContainer>
                <MainMenu close={close} style={mobileCss} />
            </CenteredFlexContainer>
            <Switch style={switchON} />
            <BackgroundImage />
        </MenuWrapper>
    );
};

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <div onClick={toggleOpen}>
                <MobileMenuIcon />
            </div>
            <MobileList close={toggleOpen} state={isOpen} />
        </>
    );
};

export default MobileMenu;

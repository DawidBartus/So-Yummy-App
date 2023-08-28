import Button, {
    AllGreenBtn,
    GreenLink,
    GreenToBlackBtn,
    NavLinks,
    RoundedLinkBtn,
    StyledLink,
    TransparentToBlackBtn,
} from '../components/reusableComponents/Buttons';

const DevComponents = () => {
    return (
        <section style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Button>Button</Button>
            <NavLinks>NavLinks</NavLinks>
            <RoundedLinkBtn>RoundedLinkBtn</RoundedLinkBtn>
            <StyledLink>StyledLink</StyledLink>
            <GreenToBlackBtn>GreenToBlackBtn</GreenToBlackBtn>
            <TransparentToBlackBtn>TransparentToBlackBtn</TransparentToBlackBtn>
            <AllGreenBtn>AllGreenBtn</AllGreenBtn>
            <GreenLink>See all</GreenLink>
        </section>
    );
};

export default DevComponents;

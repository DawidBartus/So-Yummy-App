import FlexContainer from '../FlexContainer';
import Post from '../Post/Post';
import { AllGreenBtn } from '../reusableComponents/Buttons';
import { SubsectionHeader } from '../reusableComponents/Headers';

const StartPage = (props) => {
    const { breakfast, desserts, vegan } = props.recipes;
    return (
        <FlexContainer
            style={{ flexDirection: 'column', gap: 60, padding: '40px 0px' }}
        >
            <SubsectionHeader>Breakfast</SubsectionHeader>
            <FlexContainer style={{ gap: 30, flexWrap: 'wrap' }}>
                {breakfast.map((recipe, index) => (
                    <Post
                        key={index}
                        modalSettings={props.modalSettings}
                        props={recipe}
                    />
                ))}
                <AllGreenBtn>See all</AllGreenBtn>
            </FlexContainer>

            <SubsectionHeader>Vegan</SubsectionHeader>
            <FlexContainer style={{ gap: 30, flexWrap: 'wrap' }}>
                {vegan.map((recipe, index) => (
                    <Post
                        key={index}
                        modalSettings={props.modalSettings}
                        props={recipe}
                    />
                ))}
            </FlexContainer>
            <SubsectionHeader>Desserts</SubsectionHeader>
            <FlexContainer style={{ gap: 30, flexWrap: 'wrap' }}>
                {desserts.map((recipe, index) => (
                    <Post
                        key={index}
                        modalSettings={props.modalSettings}
                        props={recipe}
                    />
                ))}
            </FlexContainer>
        </FlexContainer>
    );
};

export default StartPage;

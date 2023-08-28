import { styled } from 'styled-components';
import FlexContainer from '../FlexContainer';
import Post from '../Post/Post';
import { GreenLink } from '../reusableComponents/Buttons';
import { SubsectionHeader } from '../reusableComponents/Headers';

const PostWrapper = styled(FlexContainer)`
    gap: 10;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 576px) {
        & div:nth-last-of-type(-n + 3) {
            display: none;
        }
    }
    @media (max-width: 1045px) {
        & div:nth-last-of-type(-n + 2) {
            display: none;
        }
    }
    @media (max-width: 1380px) {
        & div:last-of-type {
            display: none;
        }
    }
`;

const StartPage = (props) => {
    const { breakfast, desserts, vegan } = props.recipes;
    return (
        <FlexContainer
            style={{
                flexDirection: 'column',
                gap: 20,
                padding: '40px 0px',
                width: '100%',
            }}
        >
            <SubsectionHeader>Breakfast</SubsectionHeader>
            <PostWrapper>
                {breakfast.map((recipe, index) => (
                    <Post
                        key={index}
                        modalSettings={props.modalSettings}
                        props={recipe}
                    />
                ))}
            </PostWrapper>
            <GreenLink to={'categories/breakfast'}>See all</GreenLink>
            <SubsectionHeader>Vegan</SubsectionHeader>
            <PostWrapper>
                {vegan.map((recipe, index) => (
                    <Post
                        key={index}
                        modalSettings={props.modalSettings}
                        props={recipe}
                    />
                ))}
            </PostWrapper>
            <GreenLink to={'categories/breakfast'}>See all</GreenLink>
            <SubsectionHeader>Desserts</SubsectionHeader>
            <PostWrapper>
                {desserts.map((recipe, index) => (
                    <Post
                        key={index}
                        modalSettings={props.modalSettings}
                        props={recipe}
                    />
                ))}
            </PostWrapper>
            <GreenLink to={'categories/desserts'}>See all</GreenLink>
        </FlexContainer>
    );
};

export default StartPage;

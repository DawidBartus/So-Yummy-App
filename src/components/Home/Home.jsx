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

const HomeSectionElement = ({ sectionName, sectionRecipes }) => {
    return (
        <>
            <SubsectionHeader>{sectionName}</SubsectionHeader>
            <PostWrapper>
                {sectionRecipes.map((recipe, index) => (
                    <Post key={index} props={recipe} />
                ))}
            </PostWrapper>
            <GreenLink to={`categories/${sectionName}`}>See all</GreenLink>
        </>
    );
};

export default HomeSectionElement;

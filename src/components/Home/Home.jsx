import { styled } from 'styled-components';
import FlexContainer from '../FlexContainer';
import Post from '../Post/Post';
import { GreenLink } from '../reusableComponents/Buttons';
import { SubsectionHeader } from '../reusableComponents/Headers';
import { useSelector } from 'react-redux';
import Loader from '../reusableComponents/Loader';

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
    const isPending = useSelector((store) => store.recipes.isPending);

    return (
        <>
            <SubsectionHeader>{sectionName}</SubsectionHeader>
            {isPending && <Loader />}
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

import { useDispatch, useSelector } from 'react-redux';
import FlexContainer from '../components/FlexContainer';
import HomeSectionElement from '../components/Home/Home';
import { useEffect } from 'react';
import { fetchStartValue } from '../redux/recipesSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.recipes);
    const { breakfast = [], vegan = [], desserts = [] } = recipes;

    useEffect(() => {
        try {
            if (breakfast.length === 0) {
                dispatch(fetchStartValue());
            }
        } catch (error) {
            console.error(error);
        }
    }, [dispatch, breakfast.length]);

    return (
        <FlexContainer
            style={{
                flexDirection: 'column',
                gap: 20,
                padding: '40px 0px',
                width: '100%',
            }}
        >
            <HomeSectionElement
                sectionName={'breakfast'}
                sectionRecipes={breakfast}
            />

            <HomeSectionElement
                sectionName={'desserts'}
                sectionRecipes={desserts}
            />

            <HomeSectionElement sectionName={'vegan'} sectionRecipes={vegan} />
        </FlexContainer>
    );
};

export default HomePage;

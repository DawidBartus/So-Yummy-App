import { useDispatch, useSelector } from 'react-redux';

import HomeSectionElement from '../components/Home/Home';
import { useEffect } from 'react';
import { fetchStartValue } from '../redux/recipesSlice';
import FlexContainer from '../components/reusableComponents/FlexContainer';

const HomePage = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.categoriesRecipes);
    const { breakfast = [], vegan = [], desserts = [] } = recipes;

    const slicedBreakfast = breakfast.slice(0, 4);
    const slicedDesserts = desserts.slice(0, 4);
    const slicedVegan = vegan.slice(0, 4);

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
                sectionName={'Breakfast'}
                sectionRecipes={slicedBreakfast}
            />

            <HomeSectionElement
                sectionName={'Desserts'}
                sectionRecipes={slicedDesserts}
            />

            <HomeSectionElement
                sectionName={'Vegan'}
                sectionRecipes={slicedVegan}
            />
        </FlexContainer>
    );
};

export default HomePage;

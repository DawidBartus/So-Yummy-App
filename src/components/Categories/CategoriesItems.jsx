import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategoriesRecipes,
    fetchMoreRecipes,
} from '../../redux/recipesSlice';
import Post from '../Post/Post';
import Loader from '../reusableComponents/Loader';

const CategoriesItems = () => {
    const { id } = useParams();
    const newId = id.toLocaleLowerCase();
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.categoriesRecipes);
    const pageRecipes = recipes[newId] || [];
    const isPending = useSelector((store) => store.recipes.isPending);
    const nextPage = useSelector((state) => state.recipes.nextPage);

    useEffect(() => {
        try {
            if (pageRecipes.length === 0) {
                dispatch(fetchCategoriesRecipes(newId));
            }
        } catch (error) {
            console.error(error);
        }
    }, [newId, dispatch, pageRecipes.length]);

    const loadMore = () => {
        dispatch(fetchMoreRecipes({ nextPage, newId }));
    };

    return (
        <>
            {isPending && <Loader />}

            {pageRecipes.map((elem, index) => (
                <Post key={index} props={elem} />
            ))}
            <button onClick={() => loadMore()}>Next Page</button>
        </>
    );
};
export default CategoriesItems;

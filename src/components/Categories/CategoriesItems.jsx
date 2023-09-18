import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategoriesRecipes,
    fetchMoreRecipes,
} from '../../redux/recipesSlice';
import Post from '../Post/Post';
import Loader from '../reusableComponents/Loader';
import { FormButton } from '../reusableComponents/Buttons';
import styled from 'styled-components';

const PaginationButton = styled(FormButton)`
    position: absolute;
    bottom: -40px;
`;

const CategoriesItems = () => {
    const { id } = useParams();
    const newId = id.toLocaleLowerCase();
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.categoriesRecipes);
    const pageRecipes = recipes[newId] || [];
    const isPending = useSelector((store) => store.recipes.isPending);
    const nextPage = useSelector((state) => state.recipes.nextPage[newId]);

    useEffect(
        () =>
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }),
        []
    );

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

            {!isPending && (
                <PaginationButton onClick={() => loadMore()}>
                    Next Page
                </PaginationButton>
            )}
        </>
    );
};
export default CategoriesItems;

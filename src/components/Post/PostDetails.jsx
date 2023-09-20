import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { RecipeHeader } from '../reusableComponents/Headers';
import {
    ContentHolder,
    PostContainerDetails,
    ImgHolder,
    PostBackground,
} from './PostStyledElements';
import { addItem, deleteItem } from '../../redux/shoppingListSlice';
import { PageOutsideLink } from '../reusableComponents/Buttons';
import { ListContainer } from '../ShoppingList/ShoppingListStyled';
import { BigParagraph, MediumParagraph } from '../reusableComponents/Text';
import IngredientsList from './IngredientsList';
import StepList from './StepList';
import ToggleFav from '../reusableComponents/ToggleFav';

import { fetchRecipeData } from '../../redux/recipesSlice';
import NotFound from '../NotFound/NotFound';
import Loader from '../reusableComponents/Loader';

const PostDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { link } = useParams();
    const id = link?.split('_')[0]?.toLocaleLowerCase();
    const uriID = link?.split('_')[1]?.toLocaleLowerCase();
    const isLoading = useSelector((state) => state.recipes.isPending);
    const favList = useSelector((state) => state.favoriteRecipes.recipeList);

    const recipeFromLastOpen = useSelector((state) => state.recipes.lastOpen);

    const recipeFromCat = useSelector(
        (state) => state.recipes.categoriesRecipes[id]
    )?.find((elem) => elem.recipeId === link);

    const recipeFromFound = useSelector(
        (state) => state.recipes.foundRecipes
    )?.find((elem) => elem.recipeId === link);

    let foundRecipe = recipeFromCat || recipeFromFound;
    if (!foundRecipe) {
        foundRecipe =
            recipeFromLastOpen?.uri === uriID ? recipeFromLastOpen : undefined;
    }

    const list = useSelector((state) => state.shoppingList);

    useEffect(
        () =>
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }),
        []
    );

    useEffect(() => {
        if (!foundRecipe && uriID) {
            dispatch(fetchRecipeData(uriID));
        }

        if (!foundRecipe) {
            const timeoutId = setTimeout(() => {
                navigate('/home');
            }, 2000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [dispatch, foundRecipe, navigate, uriID]);

    if (!foundRecipe) {
        return (
            <>
                {isLoading && <Loader />}
                <PostContainerDetails>
                    {!isLoading && <NotFound />}
                </PostContainerDetails>
            </>
        );
    }

    const addToShoppingList = (food, quantity, measure) => {
        dispatch(addItem({ food, quantity, measure }));
    };

    const deleteFromShoppingList = (food, quantity, measure) => {
        dispatch(deleteItem({ food, quantity, measure }));
    };

    const calcKcal = (kcal, totalWeight) => {
        return Math.ceil((kcal * 100) / totalWeight);
    };

    const {
        label,
        url,
        uri,
        source,
        cuisineType,
        calories,
        totalWeight,
        images,
        ingredientLines,
        ingredients,
    } = foundRecipe;

    const isInFav = favList.find((elem) => elem.name === label)
        ? 'red'
        : '#817676d5';
    console.log(isInFav);
    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && (
                <PostContainerDetails>
                    <div>
                        <RecipeHeader>
                            {label}
                            <ToggleFav
                                inFav={isInFav}
                                recipeName={label}
                                recipeId={uri}
                            />
                        </RecipeHeader>

                        <PageOutsideLink
                            style={{
                                fontSize: 18,
                                textDecoration: 'underline',
                            }}
                            href={url}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Source: {source}
                        </PageOutsideLink>

                        <MediumParagraph>
                            Cuisine type: {cuisineType}
                        </MediumParagraph>
                        <MediumParagraph>
                            {Math.ceil(calories)} kcal /{' '}
                            {Math.ceil(totalWeight)}g {}
                        </MediumParagraph>
                        <MediumParagraph>
                            {calcKcal(calories, totalWeight)} kcal / 100g
                        </MediumParagraph>
                    </div>
                    <ContentHolder>
                        <ImgHolder>
                            <PostBackground src={images.url} alt={label} />
                        </ImgHolder>

                        <StepList stepArray={ingredientLines} />

                        <ListContainer>
                            <BigParagraph style={{ marginBottom: 30 }}>
                                Add to shopping list:
                            </BigParagraph>
                            <IngredientsList
                                ingredients={ingredients}
                                addItem={addToShoppingList}
                                deleteItem={deleteFromShoppingList}
                                itemList={list.listFromLocalStorage}
                            />
                        </ListContainer>
                    </ContentHolder>
                </PostContainerDetails>
            )}
        </>
    );
};

export default PostDetails;

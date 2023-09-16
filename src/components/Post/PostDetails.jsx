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

const PostDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { link } = useParams();
    const id = link.split('_')[0].toLocaleLowerCase();
    let recipe = useSelector((state) => state.recipes.categoriesRecipes[id]);
    const foundRecipe = recipe?.find((elem) => elem.recipeId === link);
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
        if (recipe === undefined) {
            setTimeout(() => navigate('/home'), 2000);
        }
    }, [recipe, navigate]);

    if (recipe === undefined) {
        return (
            <PostContainerDetails>
                <RecipeHeader>Page not found</RecipeHeader>
            </PostContainerDetails>
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
        source,
        cuisineType,
        calories,
        totalWeight,
        images,
        ingredientLines,
        ingredients,
    } = foundRecipe;

    return (
        <PostContainerDetails>
            <div>
                <RecipeHeader>{label}</RecipeHeader>

                <PageOutsideLink
                    style={{ fontSize: 18, textDecoration: 'underline' }}
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                >
                    Source: {source}
                </PageOutsideLink>

                <MediumParagraph>Cuisine type: {cuisineType}</MediumParagraph>
                <MediumParagraph>
                    {Math.ceil(calories)} kcal / {Math.ceil(totalWeight)}g {}
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
    );
};

export default PostDetails;

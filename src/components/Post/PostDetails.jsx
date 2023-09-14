import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { RecipeHeader } from '../reusableComponents/Headers';
import {
    ContentHolder,
    PostContainerDetails,
    ImgHolder,
    PostBackground,
    DetailsListItem,
    ListDisc,
} from './PostStyledElements';
import { addItem, deleteItem } from '../../redux/shoppingListSlice';
import {
    PageOutsideLink,
    RoundedGreenToDark,
} from '../reusableComponents/Buttons';
import { ListContainer } from '../ShoppingList/ShoppingListStyled';
import { BigParagraph, MediumParagraph } from '../reusableComponents/Text';

const IngredientsList = ({ ingredients, addItem, itemList, deleteItem }) => {
    if (itemList === undefined) {
        return;
    }

    return (
        <ul style={{ marginLeft: 20 }}>
            {ingredients.map((elem) => (
                <DetailsListItem key={elem.food}>
                    <img
                        src={elem.image}
                        alt={elem.food}
                        width={50}
                        height={50}
                        style={{ borderRadius: '8px' }}
                    />
                    <MediumParagraph>
                        {elem.quantity.toFixed(1)} {elem.measure} {elem.food}
                    </MediumParagraph>
                    {itemList.some((element) => element.food === elem.food) ? (
                        <RoundedGreenToDark
                            onClick={() =>
                                deleteItem(
                                    elem.food,
                                    elem.quantity,
                                    elem.measure
                                )
                            }
                        >
                            delete
                        </RoundedGreenToDark>
                    ) : (
                        <RoundedGreenToDark
                            onClick={() =>
                                addItem(elem.food, elem.quantity, elem.measure)
                            }
                        >
                            AddToList
                        </RoundedGreenToDark>
                    )}
                </DetailsListItem>
            ))}
        </ul>
    );
};

const PostDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { link } = useParams();
    const id = link.split('_')[0].toLocaleLowerCase();
    const recipe = useSelector((state) => state.recipes.categoriesRecipes[id]);
    const foundRecipe = recipe?.find((elem) => elem.recipeId === link);
    const list = useSelector((state) => state.shoppingList);

    useEffect(() => {
        if (recipe === undefined) {
            navigate('notFound');
        }
    }, [recipe, navigate]);

    if (recipe === undefined) {
        return;
    }

    const addToShoppingList = (food, quantity, measure) => {
        dispatch(addItem({ food, quantity, measure }));
    };

    const deleteFromShoppingList = (food, quantity, measure) => {
        dispatch(deleteItem({ food, quantity, measure }));
    };

    const calcKcal = (kcal, totalWeight) => {
        return Math.floor((kcal * 100) / totalWeight);
    };

    const {
        label,
        url,
        source,
        cuisineType,
        calories,
        totalWeight,
        image,
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
                    {Math.floor(calories)} kcal / {Math.floor(totalWeight)}g
                </MediumParagraph>
                <MediumParagraph>
                    {calcKcal(calories, totalWeight)} kcal / 100g
                </MediumParagraph>
            </div>
            <ContentHolder>
                <ImgHolder>
                    <PostBackground src={image} alt={label} />
                </ImgHolder>

                <div>
                    <BigParagraph style={{ marginBottom: 30 }}>
                        Ingredients:
                    </BigParagraph>
                    <ul style={{ paddingLeft: 20 }}>
                        {ingredientLines.map((elem, index) => (
                            <ListDisc key={index}>
                                <MediumParagraph>{elem}</MediumParagraph>
                            </ListDisc>
                        ))}
                    </ul>
                </div>
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

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { RecipeHeader } from '../reusableComponents/Headers';
import { ImgHolder, PostBackground } from './PostStyledElements';
import { styled } from 'styled-components';
import { addItem, deleteItem } from '../../redux/shoppingListSlice';

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 768px) {
        width: 100%;
        margin: 0 20px;
    }
`;
const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const IngredientsList = ({ ingredients, addItem, itemList, deleteItem }) => {
    return (
        <ul>
            {ingredients.map((elem) => (
                <li
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 10,
                        background: 'green',
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                    key={elem.food}
                >
                    <img src={elem.image} alt="" width={50} height={50} />
                    {elem.food}

                    {itemList.some((element) => element.food === elem.food) ? (
                        <button
                            style={{ background: 'red' }}
                            onClick={() => deleteItem(elem.food)}
                        >
                            delete
                        </button>
                    ) : (
                        <button
                            onClick={() =>
                                addItem(elem.food, elem.quantity, elem.image)
                            }
                        >
                            AddToList
                        </button>
                    )}
                </li>
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

    const addToShoppingList = (food, quantity) => {
        dispatch(addItem({ food, quantity }));
    };

    const deleteFromShoppingList = (food) => {
        dispatch(deleteItem(food));
    };

    if (recipe === undefined) {
        return;
    }

    return (
        <PostContainer>
            <div>
                <RecipeHeader>{foundRecipe.label}</RecipeHeader>
                <a
                    style={{ fontSize: 18, textDecoration: 'underline' }}
                    href={foundRecipe.url}
                    rel="noreferrer"
                    target="_blank"
                >
                    Source: {foundRecipe.source}
                </a>

                <p>Cuisine type: {foundRecipe.cuisineType}</p>
                <p>
                    {Math.floor(foundRecipe.calories)} kcal /{' '}
                    {Math.floor(foundRecipe.totalWeight)}g
                </p>
                <p>
                    {Math.floor(
                        (foundRecipe.calories * 100) / foundRecipe.totalWeight
                    )}{' '}
                    kcal / 100g
                </p>
            </div>
            <ContentHolder>
                <ImgHolder>
                    <PostBackground
                        src={foundRecipe.image}
                        alt={foundRecipe.label}
                    />
                </ImgHolder>

                <div>
                    <p>Ingredients:</p>
                    <ul>
                        {foundRecipe.ingredientLines.map((elem, index) => (
                            <li key={index}>
                                {index + 1}: {elem}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>Add to shopping list:</p>
                    <IngredientsList
                        ingredients={foundRecipe.ingredients}
                        addItem={addToShoppingList}
                        deleteItem={deleteFromShoppingList}
                        itemList={list}
                    />
                </div>
            </ContentHolder>
        </PostContainer>
    );
};

export default PostDetails;

/* <p>{foundRecipe.dishType}</p>


<p>{foundRecipe.mealType}</p>
<p></p>
<p>{foundRecipe.source}</p> */

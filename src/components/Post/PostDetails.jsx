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
    console.log('itemList', itemList);

    if (itemList === undefined) {
        return;
    }
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
                    {`${elem.quantity} ${elem.measure} ${elem.food}`}

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
                                addItem(
                                    elem.food,
                                    elem.quantity,
                                    elem.measure,
                                    elem.image
                                )
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
    // console.log('list', list);
    // console.log('list from local', list.listFromLocalStorage);

    useEffect(() => {
        if (recipe === undefined) {
            navigate('notFound');
        }
    }, [recipe, navigate]);

    if (recipe === undefined) {
        return;
    }

    const addToShoppingList = (food, quantity, measure, image) => {
        dispatch(addItem({ food, quantity, measure, image }));
    };

    const deleteFromShoppingList = (food) => {
        console.log(food);
        dispatch(deleteItem(food));
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
        <PostContainer>
            <div>
                <RecipeHeader>{label}</RecipeHeader>
                <a
                    style={{ fontSize: 18, textDecoration: 'underline' }}
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                >
                    Source: {source}
                </a>

                <p>Cuisine type: {cuisineType}</p>
                <p>
                    {Math.floor(calories)} kcal / {Math.floor(totalWeight)}g
                </p>
                <p>{calcKcal(calories, totalWeight)} kcal / 100g</p>
            </div>
            <ContentHolder>
                <ImgHolder>
                    <PostBackground src={image} alt={label} />
                </ImgHolder>

                <div>
                    <p>Ingredients:</p>
                    <ul>
                        {ingredientLines.map((elem, index) => (
                            <li key={index}>
                                {index + 1}: {elem}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>Add to shopping list:</p>
                    <IngredientsList
                        ingredients={ingredients}
                        addItem={addToShoppingList}
                        deleteItem={deleteFromShoppingList}
                        itemList={list.listFromLocalStorage}
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

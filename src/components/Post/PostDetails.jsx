import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { RecipeHeader } from '../reusableComponents/Headers';
import { PostBackground } from './PostStyledElements';

const PostDetails = () => {
    const { link } = useParams();
    const navigate = useNavigate();
    const id = link.split('_')[0].toLocaleLowerCase();
    const recipe = useSelector((state) => state.recipes.categoriesRecipes[id]);
    const foundRecipe = recipe?.find((elem) => elem.recipeId === link);

    useEffect(() => {
        if (recipe === undefined) {
            navigate('notFound');
        }
    }, [recipe, navigate]);

    if (recipe === undefined) {
        return;
    }
    console.log(foundRecipe);
    return (
        <>
            <RecipeHeader>{foundRecipe.label}</RecipeHeader>
            <div style={{ maxWidth: 336, height: 336 }}>
                <PostBackground
                    src={foundRecipe.image}
                    alt={foundRecipe.label}
                />
            </div>
            <div>
                <p>{foundRecipe.calories}</p>
                <p>{foundRecipe.cuisineType}</p>
                <p>{foundRecipe.mealType}</p>
                <p>{foundRecipe.totalWeight}</p>
                <p>{foundRecipe.source}</p>
                <p>Ingredients:</p>
                <ul>
                    {foundRecipe.ingredients.map((elem) => (
                        <li
                            key={elem.food}
                        >{`${elem.quantity} ${elem.measure} ${elem.food}`}</li>
                    ))}
                </ul>
                <a href={foundRecipe.url} rel="noreferrer" target="_blank">
                    Source
                </a>
            </div>
        </>
    );
};

export default PostDetails;

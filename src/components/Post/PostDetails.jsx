import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
// import mobileBg from '../../utils/mobileBgCatRecipe.png';
// import { FullImgMobile } from './PostStyledElements';
import { useEffect } from 'react';
import { styled } from 'styled-components';

const RecipeHeader = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

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
            <div
                style={{ width: '100%', height: 'auto', position: 'relative' }}
            >
                {/* <FullImgMobile
                    src={mobileBg}
                    alt="recipe background with vegetables"
                /> */}
                <RecipeHeader>{foundRecipe.label}</RecipeHeader>
                <img src={foundRecipe.image} alt="" />
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

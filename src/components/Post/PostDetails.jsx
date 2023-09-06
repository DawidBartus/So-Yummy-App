import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import mobileBg from '../../utils/mobileBgCatRecipe.png';
import { FullImgMobile } from './PostStyledElements';
import { useEffect } from 'react';
import { styled } from 'styled-components';

const RecipeHeader = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
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

    return (
        <>
            <div style={{ width: '100%', position: 'relative' }}>
                <FullImgMobile
                    src={mobileBg}
                    alt="recipe background with vegetables"
                />
                <RecipeHeader>{foundRecipe.label}</RecipeHeader>
            </div>
        </>
    );
};

export default PostDetails;

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import mobileBg from '../../utils/mobileBgCatRecipe.png';
import { FullImgMobile } from './PostStyledElements';

const PostDetails = () => {
    const { link } = useParams();
    const id = link.split('_')[0].toLocaleLowerCase();
    const recipe = useSelector((state) => state.recipes.categoriesRecipes[id]);
    const foundRecipe = recipe.find((elem) => elem.recipeId === link);

    return (
        <>
            <div style={{ width: '100%' }}>
                <FullImgMobile
                    src={mobileBg}
                    alt="recipe background with vegetables"
                />
            </div>
            <p>{foundRecipe.label}</p>
        </>
    );
};

export default PostDetails;

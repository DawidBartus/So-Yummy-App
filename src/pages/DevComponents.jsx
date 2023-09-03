import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DevComponents = () => {
    const { id, link } = useParams();
    const recipe = useSelector((state) => state.recipes.categoriesRecipes[id]);
    const foundRecipe = recipe.find((elem) => elem.recipeId === link);

    useEffect(() => {}, [link]);

    return (
        <section style={{ display: 'flex', flexWrap: 'wrap' }}>
            <p>{foundRecipe.label}</p>
            <ul>
                {foundRecipe.ingredients.map((elem, index) => (
                    <li key={index}>{elem.text}</li>
                ))}
            </ul>
        </section>
    );
};

export default DevComponents;

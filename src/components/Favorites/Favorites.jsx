import { useSelector } from 'react-redux';
import { BigParagraph } from '../reusableComponents/Text';

const Favorites = () => {
    const favoritesRecipes = useSelector(
        (state) => state.favoriteRecipes.recipeList
    );

    if (favoritesRecipes.length === 0) {
        return <p>Add your first</p>;
    }

    return (
        <ul>
            {favoritesRecipes.map((elem) => (
                <li key={elem.name}>
                    <BigParagraph>{elem.name}</BigParagraph>
                </li>
            ))}
        </ul>
    );
};

export default Favorites;

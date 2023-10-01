import { useSelector } from 'react-redux';
import { BigParagraph } from '../reusableComponents/Text';
import FavSection, { FavHeader, FavListElement } from './FavoriteStyled';
import { LinkWrapper } from '../reusableComponents/Buttons';
import ToggleFav from '../reusableComponents/ToggleFav';

const FavList = () => {
    const favoritesRecipes = useSelector(
        (state) => state.favoriteRecipes.recipeList
    );

    if (favoritesRecipes.length === 0) {
        return <FavHeader>Add your first</FavHeader>;
    }

    return (
        <FavSection>
            <FavHeader>Favorite</FavHeader>
            <ul>
                {favoritesRecipes.map((elem) => (
                    <FavListElement key={elem.name}>
                        <LinkWrapper
                            to={`/home/fav_${elem.uri}`}
                            style={{ width: '100%' }}
                        >
                            <BigParagraph style={{ padding: '12px 24px' }}>
                                {elem.name}
                            </BigParagraph>
                        </LinkWrapper>
                        <ToggleFav recipeName={elem.name} recipeId={elem.uri} />
                    </FavListElement>
                ))}
            </ul>
        </FavSection>
    );
};

export default FavList;

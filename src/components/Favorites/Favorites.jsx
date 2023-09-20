import { useSelector } from 'react-redux';
import { BigParagraph } from '../reusableComponents/Text';
import { SubsectionHeader } from '../reusableComponents/Headers';
import FavSection, { FavListElement } from './FavoriteStyled';
import { LinkWrapper } from '../reusableComponents/Buttons';
import ToggleFav from '../reusableComponents/ToggleFav';

const FavList = () => {
    const favoritesRecipes = useSelector(
        (state) => state.favoriteRecipes.recipeList
    );

    if (favoritesRecipes.length === 0) {
        return <SubsectionHeader>Add your first</SubsectionHeader>;
    }

    return (
        <FavSection>
            <SubsectionHeader style={{ marginBottom: '30px' }}>
                Favorite
            </SubsectionHeader>
            <ul>
                {favoritesRecipes.map((elem) => (
                    <>
                        <FavListElement key={elem.name}>
                            <LinkWrapper to={`/home/fav_${elem.uri}`}>
                                <BigParagraph style={{ padding: '12px 24px' }}>
                                    {elem.name}
                                </BigParagraph>
                            </LinkWrapper>
                            <ToggleFav
                                recipeName={elem.name}
                                recipeId={elem.uri}
                            />
                        </FavListElement>
                    </>
                ))}
            </ul>
        </FavSection>
    );
};

export default FavList;

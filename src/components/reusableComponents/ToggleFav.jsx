import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addFavItem } from '../../redux/favoritesRecipesSlice';

const IconContainer = styled.span``;

const Icon = styled(FontAwesomeIcon)`
    width: 35px;
    height: 30px;
    margin-left: 20px;
    margin-bottom: 5px;
    path {
        cursor: pointer;
        transition: 500ms;
        fill: ${({ $inFav }) => $inFav};
    }
    path:hover {
        fill: ${({ $inFav }) => {
            if ($inFav === 'red') {
                return '#817676d5';
            } else {
                return 'red';
            }
        }};
        scale: 1.05;
    }
`;

const ToggleFav = ({ recipeName, recipeId }) => {
    const dispatch = useDispatch();
    const favList = useSelector((state) => state.favoriteRecipes.recipeList);
    const isInFav = favList.find((elem) => elem.name === recipeName)
        ? 'red'
        : '#817676d5';

    const handleClick = () => {
        dispatch(addFavItem({ name: recipeName, uri: recipeId }));
    };
    return (
        <IconContainer>
            <Icon $inFav={isInFav} onClick={handleClick} icon={faHeart} />
        </IconContainer>
    );
};
export default ToggleFav;

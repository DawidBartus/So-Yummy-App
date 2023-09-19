import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addFavItem } from '../../redux/favoritesRecipes';

const IconContainer = styled.span``;

const Icon = styled(FontAwesomeIcon)`
    width: 35px;
    height: 30px;
    path {
        cursor: pointer;
        transition: 500ms;
        fill: #817676d5;
    }
    path:hover {
        fill: red;
        scale: 1.05;
    }
`;

const AddToFav = ({ recipeName, recipeId }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addFavItem({ name: recipeName, uri: recipeId }));
    };
    return (
        <IconContainer>
            <Icon onClick={handleClick} icon={faHeart} />
        </IconContainer>
    );
};
export default AddToFav;

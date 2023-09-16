import { RoundedGreenToDark } from '../reusableComponents/Buttons';
import { MediumParagraph } from '../reusableComponents/Text';
import ListItem, { ListHolder } from './ShoppingListStyled';

const List = ({ currentList, listFunction, actionType }) => {
    if (currentList.length === 0) {
        return <MediumParagraph>List is empty</MediumParagraph>;
    }

    return (
        <ListHolder>
            {currentList.map((element, index) => (
                <ListItem key={element.food + index}>
                    <MediumParagraph>
                        {element.food} {element.quantity} {element.measure}
                    </MediumParagraph>
                    <RoundedGreenToDark
                        style={{ padding: '8px 20px' }}
                        onClick={() =>
                            listFunction(
                                element.food,
                                element.quantity,
                                element.measure
                            )
                        }
                    >
                        {actionType}
                    </RoundedGreenToDark>
                </ListItem>
            ))}
        </ListHolder>
    );
};

export default List;

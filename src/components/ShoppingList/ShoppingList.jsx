import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../redux/shoppingListSlice';
import { RoundedGreenToDark } from '../reusableComponents/Buttons';
import ListItem, { ListContainer, ListHolder } from './ShoppingListStyled';
import { SubsectionHeader } from '../reusableComponents/Headers';

const List = ({ currentList, listFunction, actionType }) => {
    if (currentList.length === 0) {
        return <p>List is empty</p>;
    }

    return (
        <ListHolder>
            {currentList.map((element, index) => (
                <ListItem key={element.food + index}>
                    {element.food} {element.quantity} {element.measure}
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

const ShoppingList = () => {
    const dispatch = useDispatch();
    const shoppingList = useSelector((state) => state.shoppingList);
    const { listFromLocalStorage, lastDeleted } = shoppingList;

    const handleDelete = (food, quantity, measure) => {
        dispatch(deleteItem({ food, quantity, measure }));
    };

    const addToShoppingList = (food, quantity, measure) => {
        dispatch(addItem({ food, quantity, measure }));
    };

    return (
        <>
            <ListContainer>
                <SubsectionHeader style={{ margin: '30px 0' }}>
                    Shopping List:
                </SubsectionHeader>
                <List
                    currentList={listFromLocalStorage}
                    actionType={'Delete'}
                    listFunction={handleDelete}
                />
            </ListContainer>
            <ListContainer>
                <SubsectionHeader style={{ margin: '30px 0' }}>
                    Last deleted:
                </SubsectionHeader>
                <List
                    currentList={lastDeleted}
                    actionType={'Add'}
                    listFunction={addToShoppingList}
                />
            </ListContainer>
        </>
    );
};

export default ShoppingList;

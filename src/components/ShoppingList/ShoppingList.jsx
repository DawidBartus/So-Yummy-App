import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../redux/shoppingListSlice';
import { ListContainer } from './ShoppingListStyled';
import { SubsectionHeader } from '../reusableComponents/Headers';
import List from './List';

const ShoppingList = () => {
    const dispatch = useDispatch();
    const shoppingList = useSelector((state) => state.shoppingList);
    const { listFromLocalStorage, lastDeleted } = shoppingList;

    const handleDelete = (food, quantity, measure) => {
        dispatch(deleteItem({ food, quantity, measure }));
    };

    const addToShoppingList = (food, quantity, measure) => {
        if (listFromLocalStorage.find((elem) => elem.food === food)) {
            return;
        }
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

import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../redux/shoppingListSlice';

const List = ({ currentList, listFunction, actionType }) => {
    if (currentList.length === 0) {
        return <p>List is empty</p>;
    }

    return (
        <>
            <ul>
                {currentList.map((element) => (
                    <li key={element.food}>
                        {element.food} {element.quantity} {element.measure}
                        <button
                            onClick={() =>
                                listFunction(
                                    element.food,
                                    element.quantity,
                                    element.measure
                                )
                            }
                        >
                            {actionType}
                        </button>
                    </li>
                ))}
            </ul>
        </>
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
            <div>
                <p>Shopping List:</p>
                <List
                    currentList={listFromLocalStorage}
                    actionType={'Delete'}
                    listFunction={handleDelete}
                />
            </div>

            <div>
                <p>Last deleted:</p>
                <List
                    currentList={lastDeleted}
                    actionType={'Add'}
                    listFunction={addToShoppingList} //change shopping store to update last deleted items
                />
            </div>
        </>
    );
};

export default ShoppingList;

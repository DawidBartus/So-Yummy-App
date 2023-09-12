// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../redux/shoppingListSlice';

const List = ({ currentList, deleteItem }) => {
    return (
        <ul>
            {currentList.map((element) => (
                <li key={element.food}>
                    {element.food} {element.quantity} {element.measure}
                    <button onClick={() => deleteItem(element.food)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

const ShoppingList = () => {
    const dispatch = useDispatch();
    const shoppingList = useSelector((state) => state.shoppingList);
    const { listFromLocalStorage, lastDeleted } = shoppingList;

    const handleDelete = (food) => {
        dispatch(deleteItem(food));
    };

    // useEffect(() => {}, [shoppingList]);
    console.log(listFromLocalStorage.length);
    return (
        <>
            {listFromLocalStorage.length >= 1 && (
                <List
                    currentList={listFromLocalStorage}
                    deletedList={lastDeleted}
                    deleteItem={handleDelete}
                />
            )}
            {!listFromLocalStorage.length >= 1 && <p>Add something</p>}
        </>
    );
};

export default ShoppingList;

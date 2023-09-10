import { useDispatch, useSelector } from 'react-redux';

const List = ({ array }) => {
    console.log(array[0]);
    return (
        <ul>
            {array.map((element) => (
                <li key={element.food}>
                    {element.food} {element.quantity} {element.measure}
                </li>
            ))}
        </ul>
    );
};

const ShoppingList = () => {
    const dispatch = useDispatch();
    const shoppingList = useSelector((state) => state.shoppingList);

    return (
        <>
            {shoppingList.length >= 1 ? (
                <List array={shoppingList} />
            ) : (
                <p>nope</p>
            )}
        </>
    );
};

export default ShoppingList;

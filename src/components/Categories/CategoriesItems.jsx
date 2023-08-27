import { useParams } from 'react-router';
import { fetchRecipes } from '../../Services/ApiFetch';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Loader from '../reusableComponents/Loader';

const CategoriesItems = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const result = await fetchRecipes(id);
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            {isLoading ? <Loader /> : null}
            {data.map((elem, index) => (
                <Post key={index} props={elem} />
            ))}
        </>
    );
};
export default CategoriesItems;

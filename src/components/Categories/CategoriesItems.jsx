import { useParams } from 'react-router';
import { fetchRecipes } from '../../Services/ApiFetch';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';

const CategoriesItems = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchRecipes(id);
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            {data.map((elem, index) => (
                <Post key={index} props={elem} onClick={{}} />
            ))}
        </>
    );
};
export default CategoriesItems;

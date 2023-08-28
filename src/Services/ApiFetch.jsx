import axios from 'axios';

const baseKey = '36c3ac425b9892779965b003d89cde16';
const apiId = '80ef1424';

const firstApiFetch = async () => {
    let breakfast = await axios(
        `https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=${apiId}&app_key=${baseKey}`
    ).then((res) => res.data.hits.slice(0, 4));
    let vegan = await axios(
        `https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=${apiId}&app_key=${baseKey}`
    ).then((res) => res.data.hits.slice(0, 4));
    let desserts = await axios(
        `https://api.edamam.com/api/recipes/v2?type=public&q=desserts&app_id=${apiId}&app_key=${baseKey}`
    ).then((res) => res.data.hits.slice(0, 4));

    const results = { breakfast, vegan, desserts };

    return results;
};

const fetchRecipes = async (props) => {
    let result = await axios(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${props}&app_id=${apiId}&app_key=${baseKey}`
    ).then((res) => res.data.hits);
    console.log(result);
    return result;
};

const fetchByUri = async ({ uri }) => {
    let result = await axios(
        `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=${apiId}&app_key=${baseKey}`
    );
    console.log(result);
    return result;
};
export { fetchRecipes, fetchByUri };
export default firstApiFetch;

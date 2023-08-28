import axios from 'axios';

const baseKey = '36c3ac425b9892779965b003d89cde16';
const apiId = '80ef1424';

const fetchRecipes = async (query) => {
    try {
        const response = await axios(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${baseKey}`
        );
        return response.data.hits;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const firstApiFetch = async () => {
    let fullBreakfast = await fetchRecipes('breakfast');
    let breakfast = fullBreakfast.slice(0, 4);

    let fullVegan = await fetchRecipes('vegan');
    let vegan = fullVegan.slice(0, 4);

    let fullDesserts = await fetchRecipes('desserts');
    let desserts = fullDesserts.slice(0, 4);

    const results = { breakfast, vegan, desserts };

    return results;
};

const fetchByUri = async ({ uri }) => {
    let result = await axios(
        `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=${apiId}&app_key=${baseKey}`
    );

    return result;
};
export { fetchRecipes, fetchByUri };
export default firstApiFetch;

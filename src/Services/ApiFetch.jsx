import axios from 'axios';
import { nanoid } from 'nanoid';

const baseKey = '36c3ac425b9892779965b003d89cde16';
const apiId = '80ef1424';

const fetchRecipes = async (query) => {
    try {
        const response = await axios(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${baseKey}`
        );

        const responseArray = response.data.hits.map(({ recipe }) => {
            return { ...recipe, recipeId: `${query}_${nanoid()}` };
        });

        return responseArray;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const firstApiFetch = async () => {
    let breakfast = await fetchRecipes('Breakfast');
    let vegan = await fetchRecipes('Vegan');
    let desserts = await fetchRecipes('Desserts');

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

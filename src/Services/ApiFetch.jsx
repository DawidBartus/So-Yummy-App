import axios from 'axios';
import { nanoid } from 'nanoid';

const baseKey = '36c3ac425b9892779965b003d89cde16';
const apiId = '80ef1424';

const changeObject = (object, query = 'found') => {
    return {
        label: object.label,
        images: object.images.REGULAR,
        url: object.url,
        uri: object.uri,
        source: object.source,
        yield: object.yield,
        ingredientLines: object.ingredientLines,
        ingredients: object.ingredients,
        calories: object.calories,
        totalWeight: object.totalWeight,
        cousineType: object.cousineType,
        mealType: object.mealType,
        cuisineType: object.cuisineType,
        recipeId: `${query}_${nanoid()}`,
    };
};

const fetchRecipes = async (query) => {
    try {
        const response = await axios(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${baseKey}`
        );

        const responseArray = response.data.hits.map(({ recipe }) => {
            return changeObject(recipe, query);
        });

        const nextPage = response.data._links.next.href;

        return { responseArray, nextPage };
    } catch (error) {
        console.error(error);
        return [];
    }
};

const fetchMore = async (link, query) => {
    const response = await axios(link);

    const responseArray = response.data.hits.map(({ recipe }) => {
        return changeObject(recipe, query);
    });

    const loadMore = response.data._links.next.href;

    return { responseArray, loadMore };
};

const firstApiFetch = async () => {
    let breakfast = await fetchRecipes('Breakfast');
    let vegan = await fetchRecipes('Vegan');
    let desserts = await fetchRecipes('Desserts');

    const recipeArray = {
        breakfast: breakfast.responseArray,
        vegan: vegan.responseArray,
        desserts: desserts.responseArray,
    };

    return recipeArray;
};

const fetchByUri = async ({ uri }) => {
    let result = await axios(
        `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=${apiId}&app_key=${baseKey}`
    );

    return result;
};
export { fetchRecipes, fetchByUri, fetchMore };
export default firstApiFetch;

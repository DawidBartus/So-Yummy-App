import axios from 'axios';
// import { nanoid } from 'nanoid';

const baseKey = '36c3ac425b9892779965b003d89cde16';
const apiId = '80ef1424';

const changeObject = (object, query = 'found') => {
    return {
        label: object.label,
        images: object.images?.REGULAR,
        url: object.url,
        uri: object.uri?.split('#recipe_')[1],
        source: object.source,
        yield: object.yield,
        ingredientLines: object.ingredientLines,
        ingredients: object.ingredients,
        calories: object.calories,
        totalWeight: object.totalWeight,
        cousineType: object.cousineType,
        mealType: object.mealType,
        cuisineType: object.cuisineType,
        recipeId: `${query}_${object.uri?.split('#recipe_')[1]}`,
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
    try {
        const response = await axios(link);

        const responseArray = response.data.hits.map(({ recipe }) => {
            return changeObject(recipe, query);
        });

        const loadMore = response.data._links.next.href;

        return { responseArray, loadMore };
    } catch (error) {
        console.error(error);
        return;
    }
};

const firstApiFetch = async () => {
    try {
        let breakfast = await fetchRecipes('Breakfast');
        let vegan = await fetchRecipes('Vegan');
        let desserts = await fetchRecipes('Desserts');

        const recipeArray = {
            breakfast: breakfast.responseArray,
            vegan: vegan.responseArray,
            desserts: desserts.responseArray,
        };

        const nextPage = {
            breakfast: breakfast.nextPage,
            vegan: vegan.nextPage,
            desserts: desserts.nextPage,
        };

        return { recipeArray, nextPage };
    } catch (error) {
        console.error(error);
        return;
    }
};

const fetchByUri = async (uri) => {
    try {
        const result = await axios(
            `https://api.edamam.com/api/recipes/v2/${uri}?type=public&app_id=${apiId}&app_key=${baseKey}`
        );
        const foundRecipe = changeObject(result.data.recipe);

        return foundRecipe;
    } catch (error) {
        console.error(error);
        return;
    }
};

export { fetchRecipes, fetchByUri, fetchMore };
export default firstApiFetch;

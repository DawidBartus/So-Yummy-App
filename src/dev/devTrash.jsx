// let response = await axios(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=${apiId}&app_key=${baseKey}`
// )
//     .then((res) => res.data.hits)
//     .catch((error) => console.log(error));
// return response;

// let breakfast = await axios(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=${apiId}&app_key=${baseKey}`
// ).then((res) => res.data.hits.slice(0, 4));
// let vegan = await axios(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=${apiId}&app_key=${baseKey}`
// ).then((res) => res.data.hits.slice(0, 4));
// let desserts = await axios(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=desserts&app_id=${apiId}&app_key=${baseKey}`
// ).then((res) => res.data.hits.slice(0, 4));

// const fetchRecipes = async (props) => {
//     let result = await axios(
//         `https://api.edamam.com/api/recipes/v2?type=public&q=${props}&app_id=${apiId}&app_key=${baseKey}`
//     ).then((res) => res.data.hits);

//     return result;
// };

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

// const StartPage = (props) => {
//     const { breakfast, desserts, vegan } = props.recipes;

//     return (
//         <FlexContainer
//             style={{
//                 flexDirection: 'column',
//                 gap: 20,
//                 padding: '40px 0px',
//                 width: '100%',
//             }}
//         >
//             <PageSectionElements
//                 sectionName={'breakfast'}
//                 sectionRecipes={breakfast}
//             />
//             <PageSectionElements
//                 sectionName={'desserts'}
//                 sectionRecipes={desserts}
//             />
//             <PageSectionElements sectionName={'vegan'} sectionRecipes={vegan} />
//         </FlexContainer>
//     );
// };

// const StartPage = (props) => {
//     const { breakfast, desserts, vegan } = props.recipes;
//     return (
//         <FlexContainer
//             style={{
//                 flexDirection: 'column',
//                 gap: 20,
//                 padding: '40px 0px',
//                 width: '100%',
//             }}
//         >
//             <SubsectionHeader>Breakfast</SubsectionHeader>
//             <PostWrapper>
//                 {breakfast.map((recipe, index) => (
//                     <Post
//                         key={index}
//                         modalSettings={props.modalSettings}
//                         props={recipe}
//                     />
//                 ))}
//             </PostWrapper>
//             <GreenLink to={'categories/breakfast'}>See all</GreenLink>
//             <SubsectionHeader>Vegan</SubsectionHeader>
//             <PostWrapper>
//                 {vegan.map((recipe, index) => (
//                     <Post
//                         key={index}
//                         modalSettings={props.modalSettings}
//                         props={recipe}
//                     />
//                 ))}
//             </PostWrapper>
//             <GreenLink to={'categories/breakfast'}>See all</GreenLink>
//             <SubsectionHeader>Desserts</SubsectionHeader>
//             <PostWrapper>
//                 {desserts.map((recipe, index) => (
//                     <Post
//                         key={index}
//                         modalSettings={props.modalSettings}
//                         props={recipe}
//                     />
//                 ))}
//             </PostWrapper>
//             <GreenLink to={'categories/desserts'}>See all</GreenLink>
//         </FlexContainer>
//     );
// };
//
// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const result = await fetchRecipes(id);
//             setData(result);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     fetchData();
// }, [id]);
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
            return { ...recipe, recipeId: nanoid() };
        });

        return responseArray;
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

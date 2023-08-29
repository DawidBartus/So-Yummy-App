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

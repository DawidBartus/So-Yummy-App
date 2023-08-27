import axios from 'axios';

// const photos = [
//   {
//     src: require("../utils/PostPhotos/pancakes.png"),
//     alt: "Banana Pancakes",
//   },
//   {
//     src: require("../utils/PostPhotos/eggs.png"),
//     alt: "Ham hock colcannon",
//   },
// ];
const baseKey = '36c3ac425b9892779965b003d89cde16';
const apiId = '80ef1424';

const apiFetch = async (query) => {
    let results = await axios(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${baseKey}`
    ).then((res) => res.data);

    return results.hits.slice(0, 4);
};

export default apiFetch;

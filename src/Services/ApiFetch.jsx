const photos = [
  {
    src: require("../utils/PostPhotos/pancakes.png"),
    alt: "Banana Pancakes",
  },
  {
    src: require("../utils/PostPhotos/eggs.png"),
    alt: "Ham hock colcannon",
  },
];

const apiFetch = () => {
  return photos;
};

export default apiFetch;

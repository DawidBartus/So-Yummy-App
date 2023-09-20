# App Project

An App with collection of recipes where user can easily search for interesting recipe, save favorite one, create shopping list and save his own recipe.

> Live demo [_here_](https://so-yummy-app.netlify.app/)

## Dev info

You can enter the "/home" route simply by clicking the fork icon on the welcome page without login/registration or simply [_click_here_](https://so-yummy-app.netlify.app/home).

![APP Route map](./readme_utils/dev_route.png)

### Ready to use:

-   Dark/light theme
-   Categories
-   Recipes details
-   Search for new recipes
-   Add/delete to/from shopping list

#### Dark/light theme

Thanks to styled-component's <ThemeProvider>, users can easily switch between dark and light modes. All components are smoothly transition within 500ms for an excellent user experience.

#### Categories

Users can discover interesting recipes based on their chosen category. If the first page isn't enough, users can easily load more recipes by simply clicking on the <Load more button>.

> In future developments users will have possibility to modify categories (add or remove) based on their preferences.

#### Recipes details

Thanks to the Edamam recipe API users can access the necessary ingredients and calorie information and find the source of the recipes to learn the cooking steps.

#### Search for new recipes

If users can't find their desire recipe in the provided categories, they can use the search page discover their next recipe to try.

#### Add to shopping list

In the recipe details users can add (or delete) the ingredients to (from) the shopping list. On the shopping list page users can view the added ingredients as well as the last three deleted ones. This feature allows users to easily restore any ingredients that they may have deleted by accident.

### In progress:

-   Favorite one - next to do!
-   Add recipes
-   My recipes

## APP Route map

![APP Route map](./readme_utils/route_map.jpg)

## Project dependencies

-   react
-   react-redux
-   react-router
-   redux toolkit
-   styled-components
-   fontawesome
-   axios
-   nanoid

### Recipe API:

> [_Edamam recipe API_](https://www.edamam.com/)

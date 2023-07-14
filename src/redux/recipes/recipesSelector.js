export const selectCategoryList = state => state.recipes.categoryList;
export const selectMainPageRecipes = state => state.recipes.mainPageRecipes;
export const selectRecipeById = state => state.recipes.recipeById;
export const selectOwnRecipes= state => state.recipes.ownRecipes;
export const selectFavoriteRecipes= state => state.recipes.favoriteRecipes;
export const selectRecipesByCategory = state => state.recipes.recipesByCategory;
export const selectError = state => state.recipes.error;
export const selectIsLoading = state => state.recipes.isLoading;

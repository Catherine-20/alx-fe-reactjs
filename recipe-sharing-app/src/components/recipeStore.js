import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  setRecipes: (newRecipes) =>
    set(() => ({
      recipes: newRecipes,
    })),
}));

export default useRecipeStore;

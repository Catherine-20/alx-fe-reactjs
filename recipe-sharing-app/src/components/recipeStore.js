// src/components/recipeStore.js
import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  addRecipe: (title, description) =>
    set(state => {
      const newRecipe = {
        id: nanoid(),
        title,
        description,
      };
      return {
        recipes: [...state.recipes, newRecipe],
        filteredRecipes: [...state.filteredRecipes, newRecipe],
      };
    }),

  deleteRecipe: (id) =>
    set(state => {
      const updated = state.recipes.filter(recipe => recipe.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  editRecipe: (id, newTitle, newDescription) =>
    set(state => {
      const updated = state.recipes.map(recipe =>
        recipe.id === id ? { ...recipe, title: newTitle, description: newDescription } : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes
    }))
}));

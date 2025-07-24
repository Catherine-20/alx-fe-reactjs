// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ Add and use this function to replace the entire recipe list
  setRecipes: (recipes) => set({ recipes }),

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update a recipe by replacing the one with the same ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

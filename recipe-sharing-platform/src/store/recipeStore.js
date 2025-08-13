import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      author: 'Alice',
      ingredients: 'Spaghetti, minced beef, tomato sauce, onion, garlic, olive oil, salt, pepper',
      instructions:
        'Sauté onions and garlic in olive oil. Brown beef. Add tomato sauce and simmer. Cook spaghetti. Combine and serve.',
    },
    {
      id: '2',
      title: 'Chicken Curry',
      author: 'Bob',
      ingredients: 'Chicken, curry paste, coconut milk, onion, garlic, ginger, oil, salt',
      instructions:
        'Sauté onion, garlic, and ginger. Add curry paste, then chicken. Pour coconut milk and simmer until tender.',
    },
    {
      id: '3',
      title: 'Avocado Toast',
      author: 'Carol',
      ingredients: 'Bread, avocado, lemon, chili flakes, salt, pepper',
      instructions:
        'Toast bread. Mash avocado with lemon, salt, pepper. Spread on toast and top with chili flakes.',
    },
  ],
  selectedId: null,

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { ...recipe, id: Date.now().toString() },
      ],
    })),

  selectRecipe: (id) => set({ selectedId: id }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      selectedId: state.selectedId === id ? null : state.selectedId,
    })),
}));

export default useRecipeStore;

import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Automatically filter whenever search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '0.5rem',
        margin: '1rem 0',
        width: '100%',
        maxWidth: '400px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    />
  );
};

export default SearchBar;

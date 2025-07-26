import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Recipe Sharing App</h1>

      <SearchBar />
      <AddRecipeForm />
      <RecipeList />

      <hr />

      <FavoritesList />
      <hr />
      <RecommendationsList />
    </div>
  );
}

export default App;

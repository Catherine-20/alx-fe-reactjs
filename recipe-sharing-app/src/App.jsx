import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;

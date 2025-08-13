import React from 'react';
import HomePage from './components/HomePage';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 p-6">
      {/* HomePage section */}
      <HomePage />

      {/* Add Recipe Form section */}
      <div className="mt-8">
        <AddRecipeForm />
      </div>
    </div>
  );
}

export default App;

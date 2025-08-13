import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load data from the local data.json
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            <p className="text-gray-700 mb-2">{recipe.description}</p>
            <p className="text-sm text-gray-500">
              Ingredients: {recipe.ingredients.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

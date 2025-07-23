import useRecipeStore from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">🍴 Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} className="border-b py-2">
            <strong>{recipe.name}</strong>: {recipe.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

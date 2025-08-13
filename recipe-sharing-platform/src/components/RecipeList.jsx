import useRecipeStore from '../store/recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const selectRecipe = useRecipeStore((s) => s.selectRecipe);
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const selectedId = useRecipeStore((s) => s.selectedId);

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Recipes</h2>

      <ul className="space-y-3">
        {recipes.map((r) => {
          const isSelected = r.id === selectedId;
          return (
            <li
              key={r.id}
              className={`p-4 border rounded-lg bg-white hover:shadow-md transition-shadow duration-200 cursor-pointer ${
                isSelected ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => selectRecipe(r.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-gray-900">{r.title}</div>
                  <div className="text-sm text-gray-500">by {r.author}</div>
                </div>
                <button
                  className="text-sm px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteRecipe(r.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {recipes.length === 0 && (
        <div className="mt-6 text-gray-500">No recipes yet. Add one!</div>
      )}
    </div>
  );
}

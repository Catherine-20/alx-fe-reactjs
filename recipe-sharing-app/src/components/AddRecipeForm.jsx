import { useState } from 'react';
import useRecipeStore from './recipeStore';

function AddRecipeForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addRecipe({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;

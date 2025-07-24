// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: uuidv4(),
      title,
      description,
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // ✅ Uses setTitle
        required
      />
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

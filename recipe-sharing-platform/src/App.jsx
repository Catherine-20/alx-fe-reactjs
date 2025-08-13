import RecipeList from './components/RecipeList';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Recipe Sharing Platform</h1>
        </div>
      </header>

      <main className="py-6">
        <RecipeList />
      </main>
    </div>
  );
}

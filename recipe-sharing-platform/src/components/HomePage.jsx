import React from 'react';

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to the Recipe Sharing Platform
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover, share, and enjoy delicious recipes from around the world.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example recipe cards */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-700">Spaghetti Carbonara</h2>
          <p className="mt-2 text-sm text-gray-500">
            A creamy and savory pasta dish from Italy.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-700">Chicken Curry</h2>
          <p className="mt-2 text-sm text-gray-500">
            A flavorful and spicy Indian-inspired dish.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-700">Avocado Toast</h2>
          <p className="mt-2 text-sm text-gray-500">
            A simple yet tasty breakfast or snack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

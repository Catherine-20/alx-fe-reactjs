import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

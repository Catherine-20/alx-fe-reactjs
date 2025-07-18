import React from 'react';

const MainContent = () => {
  const cities = ['Nairobi', 'Kigali', 'Cape Town', 'Lagos', 'Cairo'];

  return (
    <main style={{ padding: '20px', backgroundColor: '#e0e0e0', minHeight: '200px' }}>
      <h2 style={{ textAlign: 'center', color: 'darkblue' }}>List of Favorite Cities</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cities.map((city, index) => (
          <li key={index} style={{ padding: '8px', fontSize: '18px', color: 'black' }}>
            {city}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;

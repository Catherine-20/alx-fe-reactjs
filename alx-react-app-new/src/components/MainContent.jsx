import React from 'react';

const MainContent = () => {
  const cities = ['Nairobi', 'Kigali', 'Cape Town', 'Lagos', 'Cairo'];

  return (
    <main style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2 style={{ color: 'darkgreen', textAlign: 'center' }}>List of Favorite Cities</h2>
      <ul style={{ listStyleType: 'square', paddingLeft: '40px' }}>
        {cities.map((city, index) => (
          <li key={index} style={{ margin: '5px 0' }}>{city}</li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;

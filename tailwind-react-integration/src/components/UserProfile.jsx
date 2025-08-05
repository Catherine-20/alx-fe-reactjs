import React from 'react';

export default function UserProfile() {
  return (
    <div className="sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800">Jane Doe</h2>
      <p className="text-sm md:text-base text-gray-600">Frontend Developer at ALX</p>
    </div>
  );
}

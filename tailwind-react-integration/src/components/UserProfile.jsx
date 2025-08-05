import React from 'react';

export default function UserProfile() {
  return (
    <div className="sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
        Jane Doe
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        Frontend Developer at ALX
      </p>
    </div>
  );
}

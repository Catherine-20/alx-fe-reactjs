import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 max-w-xs md:max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mb-4"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        Jane Doe
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center">
        Frontend Developer | React & Tailwind Enthusiast
      </p>
    </div>
  );
};

export default UserProfile;

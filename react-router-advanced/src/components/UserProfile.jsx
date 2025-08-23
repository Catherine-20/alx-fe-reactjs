// src/components/UserProfile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

export default UserProfile;

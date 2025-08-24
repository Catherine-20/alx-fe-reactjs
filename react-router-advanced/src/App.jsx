// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound"; // make sure this file exists

function App() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/profile" style={{ marginRight: 10 }}>Profile</Link>
        <Link to="/blog/1">Blog 1</Link>
      </nav>

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected + nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Catch-all route (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

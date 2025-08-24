// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Nested routes for Profile */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected route example */}
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <h1>Protected Content</h1>
            </ProtectedRoute>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

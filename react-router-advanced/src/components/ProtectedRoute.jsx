// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// Simple authentication hook (for demo purposes)
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Simulate login/logout
  React.useEffect(() => {
    // You could replace this with real auth logic
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");
  }, []);

  return { isAuthenticated };
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;

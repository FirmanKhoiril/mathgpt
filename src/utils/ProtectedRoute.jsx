import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../context/useGlobalStore";

export const ProtectedRoute = ({ children }) => {
  // Get authentication state and navigation function from global store
  const { isAuth } = useGlobalStore();
  const navigate = useNavigate();

  // you can change depend on user cookies

  // Check authentication status on component mount
  useEffect(() => {
    // Redirect to registration page if not authenticated
    if (!isAuth) {
      navigate("/register");
    }
  }, [isAuth, navigate]);

  // Render the protected route
  return <>{children}</>;
};

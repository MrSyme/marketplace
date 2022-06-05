import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  const getAuth = () => {
    if (user) {
      if (user.role !== "comprador") {
        return children;
      }
      return <Navigate to="/" />;
    }
    return <Navigate to="/login" />;
  };

  return getAuth();
};

export default ProtectedRoute;

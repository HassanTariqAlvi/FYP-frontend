import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.authentication);
  return auth.logged_in ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
  // return <Outlet />;
};

export default ProtectedRoute;

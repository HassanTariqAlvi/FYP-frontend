import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import "assets/Styles/App.css";
import Pages from "pages/Pages";
import Login from "pages/Authentication/Login";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Protected Routes */}
        {/* <Route element={<PersistLogin />}> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}>
            {Pages.map((page) => (
              <Route key={page.id} path={page.path} element={page.name} />
            ))}
          </Route>
        </Route>
        {/* </Route> */}

        {/* Public Routes */}
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<h4>Page not found</h4>} />
      </Routes>
    </React.Fragment>
  );
}

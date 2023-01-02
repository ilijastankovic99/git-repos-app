import React from "react";
import { Navigate } from "react-router-dom";

export default [
  {
    index: true,
    element: <Navigate to="home" replace />,
  },
  {
    path: "*",
    element: () => `not found`,
  },
];

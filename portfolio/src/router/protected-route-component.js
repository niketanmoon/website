import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRouteComponent = () => {
  return <Outlet />;
};

export default ProtectedRouteComponent;


import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Layouts from "../layouts";

function ProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return token ? (
    <>
      <Layouts>
        {children}
      </Layouts>
    </>
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
}

export default ProtectedWrapper;

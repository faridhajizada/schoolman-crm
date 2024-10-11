import { FC, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
// import { ErrorsPage } from "../modules/errors/ErrorsPage";
// import { Logout } from "../modules/auth";
import { App } from "../App";
import Login from "../pages/Login/Login";

const AppRoutes: FC = () => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        setCurrentUser(true);
      } else {
        setCurrentUser(false);
      }
    };

    checkToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {/* <Route path="error/*" element={<ErrorsPage />} /> */}
          {/* <Route path="logout" element={<Logout />} /> */}
          {currentUser ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<Login />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };

import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";

const ClientsPage = lazy(() => import("./../pages/clients/Clients.jsx"));
const DevicesPage = lazy(() => import("../pages/devices/Devices.jsx"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="dashboard/clients" element={<ClientsPage />} />
        <Route path="dashboard/devices" element={<DevicesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };

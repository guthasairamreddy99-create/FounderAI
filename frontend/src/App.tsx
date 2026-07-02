import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./components/Dashboard/DashboardPage";
import BusinessDetailsPage from "./components/BusinessDetails/BusinessDetailsPage";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<DashboardPage />}
      />

      <Route
        path="/business/:id"
        element={<BusinessDetailsPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;
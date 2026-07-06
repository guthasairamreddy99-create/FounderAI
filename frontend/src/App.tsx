import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./components/Dashboard/DashboardPage";
import BusinessDetailsPage from "./components/BusinessDetails/BusinessDetailsPage";

import BusinessPage from "./components/Pages/BusinessPage";
import FinancialPage from "./components/Pages/FinancialPage";
import CustomersPage from "./components/Pages/CustomersPage";
import MarketingPage from "./components/Pages/MarketingPage";
import AIMentorPage from "./components/Pages/AIMentorPage";
import ReportsPage from "./components/Pages/ReportsPage";
import SettingsPage from "./components/Pages/SettingsPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboard */}
      <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

      {/* Business */}
      <Route path="/business" element={<ProtectedRoute><BusinessPage /></ProtectedRoute>} />
      <Route
        path="/business/:id"
        element={<ProtectedRoute><BusinessDetailsPage /></ProtectedRoute>}
      />

      {/* Other Pages */}
      <Route path="/financial" element={<ProtectedRoute><FinancialPage /></ProtectedRoute>} />
      <Route path="/customers" element={<ProtectedRoute><CustomersPage /></ProtectedRoute>} />
      <Route path="/marketing" element={<ProtectedRoute><MarketingPage /></ProtectedRoute>} />
      <Route path="/mentor" element={<ProtectedRoute><AIMentorPage /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./components/Dashboard/DashboardPage";
import BusinessDetailsPage from "./components/BusinessDetails/BusinessDetailsPage";

import BusinessPage from "./components/Pages/BusinessPage";
import FinancialPage from "./components/Pages/FinancialPage";
import CustomersPage from "./components/Pages/CustomersPage";
import AIMentorPage from "./components/Pages/AIMentorPage";
import ReportsPage from "./components/Pages/ReportsPage";
import SettingsPage from "./components/Pages/SettingsPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import BusinessPlanPage from "./pages/BusinessPlanPage";
import MyBusinessPlansPage from "./pages/MyBusinessPlansPage";
import ViewBusinessPlanPage from "./pages/ViewBusinessPlanPage";
import PitchDeckPage from "./pages/PitchDeckPage";
import SWOTPage from "./pages/SWOTPage";
import CompetitorPage from "./pages/CompetitorPage";
import MarketingPage from "./pages/MarketingPage";
import AIHubPage from "./pages/AIHubPage";

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
<Route
  path="/business-plan"
  element={<BusinessPlanPage />}
/>

<Route
  path="/pitch-deck"
  element={<PitchDeckPage />}

/>

<Route
  path="/ai-hub"
  element={<ProtectedRoute><AIHubPage /></ProtectedRoute>}
/>

<Route
  path="/my-plans"
  element={<MyBusinessPlansPage />}
/>

<Route
  path="/my-plans/:id"
  element={<ViewBusinessPlanPage />}
/>

<Route
  path="/marketing-ai"
  element={<MarketingPage />}
/>

<Route
  path="/swot"
  element={<SWOTPage />}
/>

<Route
  path="/competitor"
  element={<CompetitorPage />}
/>

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
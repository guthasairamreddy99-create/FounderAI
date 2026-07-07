import { useEffect, useMemo, useState } from "react";
import type { Business } from "../../types/business";

import AppLayout from "../Layout/AppLayout";
import DashboardHeader from "./DashboardHeader";
import BusinessCard from "./BusinessCard";
import Modal from "../common/Modal";
import BusinessWizard from "../BusinessWizard/BusinessWizard";
import RevenueChart from "../Charts/RevenueChart";
import ExpenseChart from "../Charts/ExpenseChart";
import KPICards from "./KPICards";
import {
  getBusinesses,
  deleteBusiness,
  getDashboardStats,
} from "../../api/businessApi";
import BusinessStatusChart from "../Charts/BusinessStatusChart";
import RevenueVsExpenseChart from "../Charts/RevenueVsExpenseChart";
import RecentActivity from "./RecentActivity";
import { toast } from "react-toastify";
import RevenueTrend from "../Charts/RevenueTrend";
import BusinessTable from "./BusinessTable";
import { exportDashboard } from "../../utils/exportPDF";
import { exportBusinessesToExcel } from "../../utils/exportExcel";
import NotificationBell from "./NotificationBell";

function DashboardPage() {
  const [showWizard, setShowWizard] = useState(false);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBusiness, setEditingBusiness] =
    useState<Business | null>(null);
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState<string[]>([]);
  const [dashboardStats, setDashboardStats] = useState({
  totalBusinesses: 0,
  totalBusinessPlans: 0,
  totalBudget: 0,
  totalRevenue: 0,
  totalExpenses: 0,
  totalProfit: 0,
  averageBudget: 0,
  latestBusiness: "",
});
  const loadBusinesses = async () => {
    try {
      setLoading(true);

      const data = await getBusinesses();

      setBusinesses(data);
    } catch (error) {
      console.error("Failed to load businesses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBusinesses();
    loadDashboard();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteBusiness(id);
      toast.success("Business Deleted");
      setNotifications((prev) => [
  "Business Deleted",
  ...prev,
]);
      loadBusinesses();
      loadDashboard();
    } catch (error) {
      console.error(error);
      toast.error("Delete Failed");
    }
  };

  const loadDashboard = async () => {
  try {
    const data = await getDashboardStats();
    setDashboardStats(data);
  } catch (error) {
    console.error(error);
  }
};

  const handleEdit = (id: string) => {
    const business = businesses.find(
      (b) => b._id === id
    );
    if (!business) return;

    setEditingBusiness(business);

    setNotifications((prev) => [
  "Business Opened for Editing",
  ...prev,
]);

    setShowWizard(true);
  };

  // Dashboard statistics
  const stats = useMemo(() => {
    const totalBudget = businesses.reduce(
      (sum, b) => sum + (Number(b.budget) || 0),
      0
    );

    const totalRevenue = businesses.reduce(
      (sum, b) => sum + (Number(b.revenue) || 0),
      0
    );

    const totalCustomers = businesses.reduce(
      (sum, b) => sum + (Number(b.customers) || 0),
      0
    );

    const avgHealth =
      businesses.length === 0
        ? 100
        : Math.round(
            businesses.reduce(
              (sum, b) => sum + (Number(b.growth) || 0),
              0
            ) / businesses.length
          );

    const planning = businesses.filter(
  (b) => b.status === "Planning"
).length;

const running = businesses.filter(
  (b) => b.status === "Running"
).length;

const completed = businesses.filter(
  (b) => b.status === "Completed"
).length;

    return {
      totalBudget,
      totalRevenue,
      totalCustomers,
      avgGrowth: avgHealth,
      totalProfit: totalRevenue - totalBudget,

      planning,
      running,
      completed,
    };
  }, [businesses]);

  const filteredBusinesses = businesses.filter((business) =>
  business.name
    .toLowerCase()
    .includes(search.toLowerCase())
);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-[70vh]">
          <h2 className="text-2xl text-white">
            Loading businesses...
          </h2>
        </div>
      </AppLayout>
    );
  }

  return (
  <AppLayout>
    <div id="dashboard">
      <DashboardHeader
        onNewBusiness={() => {
          setEditingBusiness(null);
          setShowWizard(true);
        }}
      />

   <div className="flex items-center gap-4 my-8">
  
  <div className="flex justify-end mb-6">
  <NotificationBell
    notifications={notifications}
  />
</div>

  <input
    type="text"
    placeholder="🔍 Search businesses..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 bg-slate-900 rounded-xl px-6 py-4 text-white outline-none border border-slate-700 focus:border-indigo-500"
  />

  <button
    onClick={exportDashboard}
    className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-xl text-white font-semibold"
  >
    📄 Export PDF
  </button>

</div>   

 <button
  onClick={() => exportBusinessesToExcel(filteredBusinesses)}
  className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-xl text-white font-semibold"
>
  📊 Export Excel
</button> 

  <KPICards
  businesses={dashboardStats.totalBusinesses}
  budget={dashboardStats.totalBudget}
  revenue={dashboardStats.totalRevenue}
  profit={dashboardStats.totalProfit}
  customers={stats.totalCustomers}
  growth={stats.avgGrowth}
/>

  {/* Charts go here */}

  <div className="grid lg:grid-cols-2 gap-8 mt-10">

    <RevenueChart
      revenue={[
        15000,
        25000,
        32000,
        45000,
        60000,
        stats.totalRevenue,
      ]}
    />

    <ExpenseChart
      expenses={[
        8000,
        12000,
        18000,
        25000,
        30000,
        stats.totalBudget,
      ]}
    />

  </div>

  <div className="mt-10">
    <RevenueTrend />
</div>

  <div className="mt-10">
  <BusinessStatusChart
    planning={stats.planning}
    running={stats.running}
    completed={stats.completed}
  />
</div>

  <div className="mt-10">

  <RevenueVsExpenseChart
    revenue={stats.totalRevenue}
    expenses={stats.totalBudget}
  />

</div>

  <div className="mt-10">
    <RecentActivity />
</div>

  <BusinessTable businesses={filteredBusinesses} />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

  <div className="bg-slate-900 rounded-2xl p-6">
    <p className="text-gray-400">Business Plans</p>
    <h2 className="text-4xl font-bold text-indigo-400 mt-3">
      {dashboardStats.totalBusinessPlans}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6">
    <p className="text-gray-400">Average Budget</p>
    <h2 className="text-4xl font-bold text-green-400 mt-3">
      ₹{dashboardStats.averageBudget.toLocaleString()}
    </h2>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6">
    <p className="text-gray-400">Latest Business</p>
    <h2 className="text-2xl font-bold text-cyan-400 mt-3">
      {dashboardStats.latestBusiness}
    </h2>
  </div>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
  {filteredBusinesses.length === 0 ? (
    <div className="col-span-full text-center text-gray-400">
      No businesses found.
    </div>
        ) : (
          filteredBusinesses.map((business: Business) => (
            <BusinessCard
              key={business._id}
              id={business._id ?? ""}
              title={business.name}
              status={business.status}
              location={business.location}
              budget={business.budget}
              customer={business.customer}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}

      </div>

      {showWizard && (
        <Modal
          onClose={() => {
            setShowWizard(false);
            setEditingBusiness(null);
          }}
        >
          <BusinessWizard
            business={editingBusiness}
            onClose={() => {
              setShowWizard(false);
              setEditingBusiness(null);
              loadBusinesses();
            }}
          />
        </Modal>
      )}
      </div>
    </AppLayout>
  );
}

export default DashboardPage;
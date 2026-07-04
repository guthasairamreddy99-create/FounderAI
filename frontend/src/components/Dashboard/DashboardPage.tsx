import { useEffect, useState } from "react";
import type { Business } from "../../types/business";

import AppLayout from "../Layout/AppLayout";
import DashboardHeader from "./DashboardHeader";
import BusinessCard from "./BusinessCard";
import Modal from "../common/Modal";
import BusinessWizard from "../BusinessWizard/BusinessWizard";
import { getBusinesses, deleteBusiness } from "../../api/businessApi";

function DashboardPage() {
  const [showWizard, setShowWizard] = useState(false);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);

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

const handleDelete = async (id: string) => {
  try {
    await deleteBusiness(id);
    await loadBusinesses();
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

 const handleEdit = (id: string) => {
  const business = businesses.find((b) => b._id === id);

  if (!business) return;

  setEditingBusiness(business);
  setShowWizard(true);
};

  useEffect(() => {
    loadBusinesses();
  }, []);

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

      <DashboardHeader
        onNewBusiness={() => setShowWizard(true)}
      />

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Businesses</p>
          <h2 className="text-4xl font-bold text-cyan-400 mt-3">
            {businesses.length}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Revenue</p>
          <h2 className="text-4xl font-bold text-green-400 mt-3">
            ₹1.2L
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Customers</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-3">
            284
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Health Score</p>
          <h2 className="text-4xl font-bold text-purple-400 mt-3">
            92%
          </h2>
        </div>

      </div>

      {/* Business List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {businesses.length === 0 ? (

          <div className="text-gray-400 text-xl">
            No businesses found. Create your first business 🚀
          </div>

        ) : (

          businesses.map((business) => (
            <BusinessCard
              key={business._id}
              id={business._id}
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
        <Modal onClose={() => setShowWizard(false)}>
          <BusinessWizard
            onClose={() => {
              setShowWizard(false);
              loadBusinesses();
            }}
          />
        </Modal>
      )}

    </AppLayout>
  );
}

export default DashboardPage;
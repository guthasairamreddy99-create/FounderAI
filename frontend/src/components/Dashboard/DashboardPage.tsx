import { useEffect, useState } from "react";
import type { Business } from "../../types/business";

import { getBusinesses } from "../../api/businessApi";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import BusinessCard from "./BusinessCard";
import Modal from "../common/Modal";
import BusinessWizard from "../BusinessWizard/BusinessWizard";

function DashboardPage() {
  const [showWizard, setShowWizard] = useState(false);
  const [businesses, setBusinesses] = useState<Business[]>([]);

  const loadBusinesses = async () => {
    try {
      const data = await getBusinesses();
      setBusinesses(data);
    } catch (error) {
      console.error("Failed to load businesses:", error);
    }
  };

  useEffect(() => {
    loadBusinesses();
  }, []);

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <DashboardHeader
          onNewBusiness={() => setShowWizard(true)}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.length === 0 ? (
            <div className="text-gray-400 text-xl">
              No businesses found. Create your first business 🚀
            </div>
          ) : (
            businesses.map((business: any) => (
              <BusinessCard
                key={business._id}
                id={business._id}
                title={business.name}
                status={business.status}
                location={business.location}
                budget={business.budget}
                customer={business.customer}
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
      </div>
    </div>
  );
}

export default DashboardPage;
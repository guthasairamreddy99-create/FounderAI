import { useEffect, useState } from "react";
import type { Business } from "../../types/business";

import AppLayout from "../Layout/AppLayout";
import DashboardHeader from "../Dashboard/DashboardHeader";
import BusinessCard from "../Dashboard/BusinessCard";
import Modal from "../common/Modal";
import BusinessWizard from "../BusinessWizard/BusinessWizard";

import {
  getBusinesses,
  deleteBusiness,
} from "../../api/businessApi";

function BusinessPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  const [showWizard, setShowWizard] = useState(false);
  const [editingBusiness, setEditingBusiness] =
    useState<Business | null>(null);

  const loadBusinesses = async () => {
    try {
      setLoading(true);
      const data = await getBusinesses();
      setBusinesses(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBusinesses();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteBusiness(id);
    loadBusinesses();
  };

  const handleEdit = (id: string) => {
    const business = businesses.find(
      (b) => b._id === id
    );

    if (!business) return;

    setEditingBusiness(business);
    setShowWizard(true);
  };

  return (
    <AppLayout>

      <DashboardHeader
        onNewBusiness={() => {
          setEditingBusiness(null);
          setShowWizard(true);
        }}
      />

      <h1 className="text-4xl font-bold text-white mb-8">
        💼 Business Manager
      </h1>

      {loading ? (
        <h2 className="text-white text-xl">
          Loading...
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {businesses.map((business) => (
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
          ))}

        </div>
      )}

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

    </AppLayout>
  );
}

export default BusinessPage;
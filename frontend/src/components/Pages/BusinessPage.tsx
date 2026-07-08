import { useEffect, useState } from "react";
import type { Business } from "../../types/business";

import AppLayout from "../Layout/AppLayout";
import DashboardHeader from "../Dashboard/DashboardHeader";
import BusinessCard from "../Dashboard/BusinessCard";
import Modal from "../common/Modal";
import BusinessWizard from "../BusinessWizard/BusinessWizard";
import Swal from "sweetalert2";
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

  const [filter, setFilter] = useState("All");

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
  const result = await Swal.fire({
    title: "Delete Business?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6366f1",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
  });

  if (!result.isConfirmed) return;

  try {
    await deleteBusiness(id);

    Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Business deleted successfully.",
      timer: 1500,
      showConfirmButton: false,
    });

    loadBusinesses();
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",
      title: "Delete Failed",
      text: "Something went wrong.",
    });
  }
};
  const handleEdit = (id: string) => {
    const business = businesses.find(
      (b) => b._id === id
    );

    if (!business) return;

    setEditingBusiness(business);
    setShowWizard(true);
  };

  const filteredBusinesses =
    filter === "All"
      ? businesses
      : businesses.filter(
          (business) => business.status === filter
        );

  return (
    <AppLayout>

      <DashboardHeader
        onNewBusiness={() => {
          setEditingBusiness(null);
          setShowWizard(true);
        }}
      />

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          💼 Business Manager
        </h1>

        <p className="text-gray-400 mt-2">
          Manage and monitor all your businesses.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">

        <div className="bg-slate-900 rounded-2xl p-6">
          <p className="text-gray-400">Total</p>
          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            {businesses.length}
          </h2>
        </div>

        <div className="bg-yellow-900/30 rounded-2xl p-6">
          <p className="text-yellow-300">Planning</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            {
              businesses.filter(
                (b) => b.status === "Planning"
              ).length
            }
          </h2>
        </div>

        <div className="bg-green-900/30 rounded-2xl p-6">
          <p className="text-green-300">Running</p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {
              businesses.filter(
                (b) => b.status === "Running"
              ).length
            }
          </h2>
        </div>

        <div className="bg-indigo-900/30 rounded-2xl p-6">
          <p className="text-indigo-300">Completed</p>
          <h2 className="text-4xl font-bold text-indigo-400 mt-2">
            {
              businesses.filter(
                (b) => b.status === "Completed"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Filters */}

      <div className="flex gap-3 mb-8 flex-wrap">

        {[
          "All",
          "Planning",
          "Running",
          "Completed",
        ].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              filter === status
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700"
            }`}
          >
            {status}
          </button>
        ))}

      </div>

      {/* Loading */}

      {loading ? (
        <div className="text-center text-white text-2xl py-20">
          ⏳ Loading Businesses...
        </div>
      ) : filteredBusinesses.length === 0 ? (

        <div className="bg-slate-900 rounded-3xl p-20 text-center">

          <div className="text-7xl mb-5">
            📂
          </div>

          <h2 className="text-3xl text-white font-bold">
            No Businesses Found
          </h2>

          <p className="text-gray-400 mt-3">
            Click "New Business" to create your
            first business.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredBusinesses.map((business) => (

            <BusinessCard
              key={business._id}
              id={business._id ?? ""}
              title={business.name}
              status={business.status}
              location={business.location}
              budget={business.budget}
              customer={business.customers}
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
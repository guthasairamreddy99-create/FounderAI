import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { Business } from "../../types/business";

import AppLayout from "../Layout/AppLayout";

import BusinessOverview from "./BusinessOverview";
import ProfitCard from "./ProfitCard";
import CustomerGrowth from "./CustomerGrowth";

import RevenueChart from "../Charts/RevenueChart";
import ExpenseChart from "../Charts/ExpenseChart";

import { getBusinesses } from "../../api/businessApi";
import AIAdvisor from "./AIAdvisor";

function BusinessDetailsPage() {
  const { id } = useParams();

  const [business, setBusiness] =
    useState<Business | null>(null);

  useEffect(() => {
    async function loadBusiness() {
      const businesses = await getBusinesses();

      const found = businesses.find(
        (b: Business) => b._id === id
      );

      if (found) {
        setBusiness(found);
      }
    }

    loadBusiness();
  }, [id]);

  if (!business) {
    return (
      <AppLayout>
        <div className="text-center mt-20 text-white text-2xl">
          Loading...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>

      <h1 className="text-4xl font-bold text-white mb-8">
        📊 {business.name}
      </h1>

      <BusinessOverview business={business} />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <ProfitCard
          revenue={business.revenue}
          budget={business.budget}
        />

        <CustomerGrowth
          customers={business.customers}
          growth={business.growth}
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <RevenueChart
          revenue={[
            business.revenue * 0.40,
            business.revenue * 0.55,
            business.revenue * 0.72,
            business.revenue,
          ]}
        />

        <ExpenseChart
          expenses={[
            business.budget * 0.40,
            business.budget * 0.60,
            business.budget * 0.85,
            business.budget,
          ]}
        />

      </div>

      <div className="mt-8">
  <AIAdvisor
    revenue={business.revenue}
    budget={business.budget}
    customers={business.customers}
    growth={business.growth}
  />
</div>

    </AppLayout>
  );
}

export default BusinessDetailsPage;
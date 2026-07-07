import { useEffect, useState } from "react";
import { getBusinessPlans } from "../api/businessApi";
import BusinessPlanCard from "../components/BusinessPlan/BusinessPlanCard";

function MyBusinessPlansPage() {
  
const [plans, setPlans] = useState<any[]>([]);
const [filteredPlans, setFilteredPlans] = useState<any[]>([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const data = await getBusinessPlans();
      setPlans(data);
setFilteredPlans(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load business plans");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
  setSearch(value);

  const filtered = plans.filter((plan) =>
    plan.businessName.toLowerCase().includes(value.toLowerCase()) ||
    plan.businessType.toLowerCase().includes(value.toLowerCase()) ||
    plan.location.toLowerCase().includes(value.toLowerCase())
  );

  setFilteredPlans(filtered);
};

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        📚 My Business Plans
      </h1>

      <input
  type="text"
  placeholder="🔍 Search by business name, type or location..."
  value={search}
  onChange={(e) => handleSearch(e.target.value)}
  className="w-full p-4 mb-8 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
/>

      {loading ? (
        <div className="text-center text-gray-400 text-xl">
          Loading business plans...
        </div>
      ) : plans.length === 0 ? (
        <div className="text-center text-gray-400 text-xl">
          No business plans found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPlans.map((plan) => (
            <BusinessPlanCard
              key={plan._id}
              plan={plan}
              onDelete={loadPlans}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBusinessPlansPage;
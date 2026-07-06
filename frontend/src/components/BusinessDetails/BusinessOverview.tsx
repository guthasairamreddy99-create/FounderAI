import type { Business } from "../../types/business";

type Props = {
  business: Business;
};

function BusinessOverview({ business }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <h2 className="text-3xl font-bold text-white mb-8">
        Business Overview
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <p className="text-gray-400">Business Name</p>
          <h3 className="text-2xl text-white font-semibold">
            {business.name}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Location</p>
          <h3 className="text-2xl text-white font-semibold">
            {business.location}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Budget</p>
          <h3 className="text-2xl text-green-400 font-semibold">
            ₹{business.budget.toLocaleString()}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Revenue</p>
          <h3 className="text-2xl text-cyan-400 font-semibold">
            ₹{business.revenue.toLocaleString()}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Customers</p>
          <h3 className="text-2xl text-yellow-400 font-semibold">
            {business.customers}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Growth</p>
          <h3 className="text-2xl text-purple-400 font-semibold">
            {business.growth}%
          </h3>
        </div>

      </div>
    </div>
  );
}

export default BusinessOverview;
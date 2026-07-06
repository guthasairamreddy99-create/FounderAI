import type { Business } from "../../types/business";

type Props = {
  businesses: Business[];
};

function BusinessTable({ businesses }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-10 overflow-auto">
      <h2 className="text-white text-2xl font-bold mb-6">
        📋 Business Summary
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 border-b border-slate-700">
            <th className="py-3">Business</th>
            <th>Budget</th>
            <th>Revenue</th>
            <th>Customers</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {businesses.map((business) => (
            <tr
              key={business._id}
              className="border-b border-slate-800"
            >
              <td className="py-4">{business.name}</td>
              <td>₹{business.budget}</td>
              <td>₹{business.revenue}</td>
              <td>{business.customers}</td>
              <td>{business.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusinessTable;
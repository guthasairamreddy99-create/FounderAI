type Props = {
  customers: number;
  growth: number;
};

function CustomerGrowth({
  customers,
  growth,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <h2 className="text-2xl font-bold text-white">
        Customer Growth
      </h2>

      <div className="mt-6 flex justify-between">

        <div>
          <p className="text-gray-400">
            Customers
          </p>

          <h3 className="text-4xl text-cyan-400 font-bold">
            {customers}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">
            Growth
          </p>

          <h3 className="text-4xl text-green-400 font-bold">
            {growth}%
          </h3>
        </div>

      </div>

    </div>
  );
}

export default CustomerGrowth;
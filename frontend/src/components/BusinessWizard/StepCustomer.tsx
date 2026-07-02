type StepCustomerProps = {
  customer: string;
  setCustomer: (value: string) => void;
};

function StepCustomer({
  customer,
  setCustomer,
}: StepCustomerProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        🎯 Target Customer
      </h1>

      <p className="text-gray-400 mt-3">
        Who are your target customers?
      </p>

      <input
        type="text"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        placeholder="Example: Students"
        className="w-full mt-8 p-5 rounded-xl bg-slate-800 border border-slate-700 text-white"
      />
    </div>
  );
}

export default StepCustomer;
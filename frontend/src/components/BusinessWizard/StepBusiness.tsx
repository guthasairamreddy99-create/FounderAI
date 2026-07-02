type StepBusinessProps = {
  businessName: string;
  setBusinessName: (value: string) => void;
};

function StepBusiness({
  businessName,
  setBusinessName,
}: StepBusinessProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        💡 Business Information
      </h1>

      <p className="text-gray-400 mt-3">
        Tell us about the business you want to start.
      </p>

      <div className="mt-10">
        <label className="text-white block mb-2">
          Business Name
        </label>

        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Example: Tea Shop"
          className="w-full p-5 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
        />

        <p className="text-green-400 mt-4">
          Business Name: {businessName}
        </p>
      </div>
    </div>
  );
}

export default StepBusiness;
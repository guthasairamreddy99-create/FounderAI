type StepSummaryProps = {
  businessName: string;
  location: string;
  budget: string;
  customer: string;
};

function StepSummary({
  businessName,
  location,
  budget,
  customer,
}: StepSummaryProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        ✅ Review Your Business
      </h1>

      <p className="text-gray-400 mt-3">
        Please verify your details before creating the business.
      </p>

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 space-y-5 border border-slate-700">

        <div>
          <p className="text-gray-400 text-sm">Business Name</p>
          <p className="text-white text-xl font-semibold">
            {businessName}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="text-white text-xl font-semibold">
            {location}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Budget</p>
          <p className="text-white text-xl font-semibold">
            {budget}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Target Customer</p>
          <p className="text-white text-xl font-semibold">
            {customer}
          </p>
        </div>

      </div>

      <p className="text-green-400 mt-8">
        Click <strong>Finish</strong> to create your business.
      </p>
    </div>
  );
}

export default StepSummary;
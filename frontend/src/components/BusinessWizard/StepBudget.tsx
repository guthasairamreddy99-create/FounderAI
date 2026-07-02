type StepBudgetProps = {
  budget: string;
  setBudget: (value: string) => void;
};

function StepBudget({
  budget,
  setBudget,
}: StepBudgetProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        💰 Budget
      </h1>

      <p className="text-gray-400 mt-3">
        Enter your estimated investment.
      </p>

      <input
        type="text"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Example: ₹5,00,000"
        className="w-full mt-8 p-5 rounded-xl bg-slate-800 border border-slate-700 text-white"
      />
    </div>
  );
}

export default StepBudget;
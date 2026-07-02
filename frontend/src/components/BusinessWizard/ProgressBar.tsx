type ProgressBarProps = {
  step: number;
};

function ProgressBar({ step }: ProgressBarProps) {
  return (
    <div>
      <p className="text-indigo-400 font-semibold">
        Step {step} of 5
      </p>

      <div className="w-full h-3 bg-slate-800 rounded-full mt-4">
        <div
          className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${step * 20}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
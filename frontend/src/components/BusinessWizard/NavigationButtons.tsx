type NavigationButtonsProps = {
  step: number;
  setStep: (value: number) => void;
  onFinish: () => void;
};

function NavigationButtons({
  step,
  setStep,
  onFinish,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-10">
      <button
        onClick={() => {
          if (step > 1) {
            setStep(step - 1);
          }
        }}
        disabled={step === 1}
        className="bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white px-8 py-4 rounded-xl"
      >
        ← Back
      </button>

      {step < 5 ? (
        <button
          onClick={() => setStep(step + 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl"
        >
          Next →
        </button>
      ) : (
        <button
          onClick={onFinish}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
        >
          Finish ✅
        </button>
      )}
    </div>
  );
}

export default NavigationButtons;
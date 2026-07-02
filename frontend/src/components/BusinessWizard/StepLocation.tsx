type StepLocationProps = {
  location: string;
  setLocation: (value: string) => void;
};

function StepLocation({
  location,
  setLocation,
}: StepLocationProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        📍 Business Location
      </h1>

      <p className="text-gray-400 mt-3">
        Where do you want to start your business?
      </p>

      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Example: Hyderabad"
        className="w-full mt-8 p-5 rounded-xl bg-slate-800 border border-slate-700 text-white"
      />
    </div>
  );
}

export default StepLocation;
import { useState } from "react";
import {
  createBusiness,
  updateBusiness,
} from "../../api/businessApi";
import type { Business } from "../../types/business";

import StepBusiness from "./StepBusiness";
import StepLocation from "./StepLocation";
import StepBudget from "./StepBudget";
import StepCustomer from "./StepCustomer";
import StepSummary from "./StepSummary";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";
import { toast } from "react-toastify";

type BusinessWizardProps = {
  onClose: () => void;
  business?: Business | null;
};

function BusinessWizard({
  onClose,
  business,
}: BusinessWizardProps) {
  const [step, setStep] = useState(1);

  const [businessName, setBusinessName] = useState(
    business?.name || ""
  );

  const [location, setLocation] = useState(
    business?.location || ""
  );

  const [budget, setBudget] = useState(
    business?.budget?.toString() || ""
  );

  const [customers, setCustomers] = useState(
    business?.customers?.toString() || ""
  );

  const handleFinish = async () => {
    try {
      const businessData = {
        name: businessName,
        location,
        budget: Number(budget),
        customers: Number(customers),
        status: "Planning",
      };

      if (business?._id) {
        await updateBusiness(business._id, businessData);

        toast.success("✅ Business updated successfully!");
      } else {
        await createBusiness(businessData);

        toast.success("🎉 Business created successfully!");
      }

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section className="py-16 px-6 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            🚀 {business ? "Edit Business" : "Create Business"}
          </h1>

          <p className="text-gray-400 mt-3">
            Complete all 5 steps to finish your business setup.
          </p>

          <p className="text-indigo-400 font-semibold mt-4">
            Step {step} of 5
          </p>
        </div>

        {/* Progress */}
        <ProgressBar step={step} />

        {/* Step Title */}
        <div className="mt-10 mb-8">

          {step === 1 && (
            <h2 className="text-2xl font-bold text-white">
              🏢 Business Information
            </h2>
          )}

          {step === 2 && (
            <h2 className="text-2xl font-bold text-white">
              📍 Business Location
            </h2>
          )}

          {step === 3 && (
            <h2 className="text-2xl font-bold text-white">
              💰 Budget Details
            </h2>
          )}

          {step === 4 && (
            <h2 className="text-2xl font-bold text-white">
              👥 Customer Information
            </h2>
          )}

          {step === 5 && (
            <h2 className="text-2xl font-bold text-white">
              ✅ Review & Finish
            </h2>
          )}

        </div>

        {/* Steps */}
        <div>

          {step === 1 && (
            <StepBusiness
              businessName={businessName}
              setBusinessName={setBusinessName}
            />
          )}

          {step === 2 && (
            <StepLocation
              location={location}
              setLocation={setLocation}
            />
          )}

          {step === 3 && (
            <StepBudget
              budget={budget}
              setBudget={setBudget}
            />
          )}

          {step === 4 && (
            <StepCustomer
              customer={customers}
              setCustomer={setCustomers}
            />
          )}

          {step === 5 && (
            <StepSummary
              businessName={businessName}
              location={location}
              budget={budget}
              customer={customers}
            />
          )}

        </div>

        {/* Navigation */}
        <div className="mt-10">
          <NavigationButtons
            step={step}
            setStep={setStep}
            onFinish={handleFinish}
          />
        </div>

      </div>
    </section>
  );
}

export default BusinessWizard;
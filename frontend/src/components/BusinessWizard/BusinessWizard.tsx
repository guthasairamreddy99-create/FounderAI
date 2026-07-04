import { useState } from "react";
import { createBusiness } from "../../api/businessApi";

import StepBusiness from "./StepBusiness";
import StepLocation from "./StepLocation";
import StepBudget from "./StepBudget";
import StepCustomer from "./StepCustomer";
import StepSummary from "./StepSummary";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

type BusinessWizardProps = {
  onClose: () => void;
};

function BusinessWizard({ onClose }: BusinessWizardProps) {
  const [step, setStep] = useState(1);

  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [customer, setCustomer] = useState("");

  const handleFinish = async () => {
    try {
      const result = await createBusiness({
        name: businessName,
        location,
        budget,
        customer,
        status: "Planning",
      });

      console.log("✅ Business Created:", result);

      alert("Business Created Successfully!");

      onClose();
    } catch (error) {
      console.error("❌ Failed to create business:", error);
      alert("Failed to create business.");
    }
  };

  return (
    <section className="py-24 px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-10">

        <ProgressBar step={step} />

        <div className="mt-12">

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
              customer={customer}
              setCustomer={setCustomer}
            />
          )}

          {step === 5 && (
            <StepSummary
              businessName={businessName}
              location={location}
              budget={budget}
              customer={customer}
            />
          )}

        </div>

        <NavigationButtons
          step={step}
          setStep={setStep}
          onFinish={handleFinish}
        />

      </div>
    </section>
  );
}

export default BusinessWizard;
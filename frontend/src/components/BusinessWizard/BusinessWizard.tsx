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

  const [customer, setCustomer] = useState(
    business?.customer || ""
  );

  const handleFinish = async () => {
    try {
      const businessData = {
        name: businessName,
        location,
        budget: Number(budget),
        customer,
        status: "Planning",
      };

      if (business?._id) {
        await updateBusiness(business._id, businessData);

        
        toast.success("Business Updated Successfully!");
      } else {
        await createBusiness(businessData);

        toast.success("Business Created Successfully!");
      }

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
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
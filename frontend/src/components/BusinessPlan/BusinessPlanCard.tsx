import { useNavigate } from "react-router-dom";
import { deleteBusinessPlan } from "../../api/businessApi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

type Props = {
  plan: any;
  onDelete: () => void;
};

function BusinessPlanCard({ plan, onDelete }: Props) {
  const navigate = useNavigate();
 const handleDelete = async () => {
  const result = await Swal.fire({
    title: "Delete Business Plan?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6366f1",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Yes, Delete",
    cancelButtonText: "Cancel",
    background: "#0f172a",
    color: "#ffffff",
  });

  if (!result.isConfirmed) return;

  try {
    await deleteBusinessPlan(plan._id);

    toast.success("Business Plan deleted successfully!");

    onDelete();
  } catch (error) {
    console.error(error);

    toast.error("Failed to delete business plan.");
  }
};


  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white">
        {plan.businessName}
      </h2>

      <p className="text-gray-400 mt-2">
        📍 {plan.location}
      </p>

      <p className="text-gray-400">
        🏭 {plan.businessType}
      </p>

      <p className="text-green-400 font-semibold mt-3">
        💰 ₹{plan.budget.toLocaleString()}
      </p>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() =>
            navigate(`/my-plans/${plan._id}`, {
              state: plan,
            })
          }
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white"
        >
          View
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white"
        >
          PDF
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default BusinessPlanCard;
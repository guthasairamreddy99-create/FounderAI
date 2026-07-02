import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: String,
    budget: String,
    customer: String,
    status: {
      type: String,
      default: "Planning",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Business", businessSchema);
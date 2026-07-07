import mongoose from "mongoose";

const businessPlanSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },

    businessType: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    plan: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "BusinessPlan",
  businessPlanSchema
);
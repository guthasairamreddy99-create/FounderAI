import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    budget: {
      type: Number,
      default: 0,
    },

    revenue: {
      type: Number,
      default: 0,
    },

    expenses: {
      type: Number,
      default: 0,
    },

    customers: {
      type: Number,
      default: 0,
    },

    growth: {
      type: Number,
      default: 0,
    },

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
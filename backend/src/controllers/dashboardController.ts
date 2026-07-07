import { Request, Response } from "express";
import Business from "../models/Business";
import BusinessPlan from "../models/BusinessPlan";

export const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const businesses = await Business.find();
    const plans = await BusinessPlan.find();

    const totalBusinesses = businesses.length;
    const totalBusinessPlans = plans.length;

    const totalBudget = businesses.reduce(
      (sum, business) => sum + (business.budget || 0),
      0
    );

    const totalRevenue = businesses.reduce(
      (sum, business) => sum + (business.revenue || 0),
      0
    );

    const totalExpenses = businesses.reduce(
      (sum, business) => sum + (business.expenses || 0),
      0
    );

    const totalProfit = totalRevenue - totalExpenses;

    const averageBudget =
      totalBusinesses > 0
        ? Math.round(totalBudget / totalBusinesses)
        : 0;

    const latestBusiness =
      totalBusinesses > 0
        ? businesses[businesses.length - 1].name
        : "No Business";

    res.json({
      success: true,
      data: {
        totalBusinesses,
        totalBusinessPlans,
        totalBudget,
        totalRevenue,
        totalExpenses,
        totalProfit,
        averageBudget,
        latestBusiness,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard statistics",
    });
  }
};
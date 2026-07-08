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

    const totalBudget = businesses.reduce(
      (sum, b) => sum + Number(b.budget || 0),
      0
    );

    const totalRevenue = businesses.reduce(
      (sum, b) => sum + Number(b.revenue || 0),
      0
    );

    const totalCustomers = businesses.reduce(
      (sum, b) => sum + Number(b.customers || 0),
      0
    );

    const totalProfit = totalRevenue - totalBudget;

    res.json({
      success: true,

      data: {
        totalBusinesses: businesses.length,
        totalBusinessPlans: plans.length,

        totalBudget,
        totalRevenue,
        totalCustomers,
        totalProfit,

        latestBusiness:
          businesses.length > 0
            ? businesses[businesses.length - 1].name
            : "No Business",

        averageBudget:
          businesses.length === 0
            ? 0
            : Math.round(totalBudget / businesses.length),
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Dashboard Error",
    });
  }
};
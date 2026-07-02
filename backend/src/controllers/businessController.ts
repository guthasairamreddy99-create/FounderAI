import { Request, Response } from "express";
import Business from "../models/Business";

// GET all businesses
export const getBusinesses = async (
  req: Request,
  res: Response
) => {
  try {
    const businesses = await Business.find();

    res.json({
      success: true,
      data: businesses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch businesses",
    });
  }
};

// CREATE a business
export const createBusiness = async (
  req: Request,
  res: Response
) => {
  try {
    const business = await Business.create(req.body);

    res.status(201).json({
      success: true,
      data: business,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create business",
    });
  }
};
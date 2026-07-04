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

export const deleteBusiness = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const business = await Business.findByIdAndDelete(id);

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    res.json({
      success: true,
      message: "Business deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete business",
    });
  }
};

// UPDATE a business
export const updateBusiness = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const business = await Business.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    res.json({
      success: true,
      data: business,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update business",
    });
  }
};
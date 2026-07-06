import { Response } from "express";
import Business from "../models/Business";
import { AuthRequest } from "../middleware/authMiddleware";

// GET all businesses of logged-in user
export const getBusinesses = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const businesses = await Business.find({
      user: req.user.id,
    });

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

// CREATE business for logged-in user
export const createBusiness = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const business = await Business.create({
      ...req.body,
      user: req.user.id,
    });

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

// UPDATE only own business
export const updateBusiness = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    const business = await Business.findOneAndUpdate(
      {
        _id: id,
        user: req.user.id,
      },
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

// DELETE only own business
export const deleteBusiness = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    const business = await Business.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

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
import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import BusinessPlan from "../models/BusinessPlan";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateBusinessPlan = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      businessName,
      businessType,
      location,
      budget,
    } = req.body;

    const prompt = `
You are an expert startup consultant.

Create a professional business plan.

Business Name: ${businessName}
Business Type: ${businessType}
Location: ${location}
Budget: ₹${budget}

Return the response in Markdown with these sections:

# Executive Summary

# Market Analysis

# Target Customers

# Competitor Analysis

# Marketing Strategy

# Operations Plan

# Financial Plan

# Risks

# Growth Strategy

Write detailed and practical advice.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const plan = response.text ?? "";

    // Save Business Plan to MongoDB
    await BusinessPlan.create({
      businessName,
      businessType,
      location,
      budget,
      plan,
    });

    res.json({
      success: true,
      plan,
    });

  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        error?.message || "Failed to generate business plan",
    });
  }
};

export const getBusinessPlans = async (
  req: Request,
  res: Response
) => {
  try {
    const plans = await BusinessPlan.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: plans,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch business plans",
    });
  }
};

export const deleteBusinessPlan = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const deleted = await BusinessPlan.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Business plan not found",
      });
    }

    res.json({
      success: true,
      message: "Business plan deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete business plan",
    });
  }
};
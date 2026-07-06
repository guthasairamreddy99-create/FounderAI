import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const getBusinessHealth = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      revenue,
      budget,
      customers,
      growth,
      expenses,
    } = req.body;

    const prompt = `
You are an expert business analyst.

Business Details:
Revenue: ₹${revenue}
Budget: ₹${budget}
Expenses: ₹${expenses}
Customers: ${customers}
Growth: ${growth}%

Analyze the business and return ONLY valid JSON.

Example:

{
  "score": 87,
  "rating": "Excellent",
  "strengths": [
    "Strong revenue growth",
    "Healthy customer base"
  ],
  "weaknesses": [
    "Marketing expenses are increasing"
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    res.json({
      success: true,
      result: text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Health analysis failed",
    });
  }
};
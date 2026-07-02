import { Request, Response } from "express";
import { askGemini } from "../services/geminiService";
import { generateFallbackForecast } from "../services/fallbackForecast";

export const forecastBusiness = async (
  req: Request,
  res: Response
) => {
  const { revenue, expenses } = req.body;

  try {
    const prompt = `
You are FounderAI.

Revenue = ${revenue}
Expenses = ${expenses}

Predict the next 6 months.

Return ONLY JSON.

{
  "forecast":[
    {
      "month":"July",
      "revenue":100000,
      "profit":40000
    }
  ]
}
`;

    const reply = await askGemini(prompt);

    const cleanedReply = reply
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const forecast = JSON.parse(cleanedReply);

    return res.json({
      success: true,
      forecast,
      source: "Gemini AI",
    });

  } catch (error) {

    console.log("⚠ Gemini unavailable. Using fallback forecast.");

    const forecast = generateFallbackForecast(
      revenue,
      expenses
    );

    return res.json({
      success: true,
      forecast,
      source: "Fallback AI",
    });
  }
};
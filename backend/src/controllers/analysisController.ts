import { Request, Response } from "express";
import { askGemini } from "../services/geminiService";
import { generateFallbackAnalysis } from "../services/fallbackAnalysis";

export const analyzeBusiness = async (
  req: Request,
  res: Response
) => {
  const { revenue, expenses, budget } = req.body;

  try {
    const prompt = `
You are FounderAI.

Analyze this business.

Revenue: ${revenue}

Expenses: ${expenses}

Budget: ${budget}

Return ONLY JSON.

{
  "score":85,
  "strengths":["..."],
  "weaknesses":["..."],
  "risks":["..."],
  "recommendations":["..."]
}
`;

    const reply = await askGemini(prompt);

    const cleanedReply = reply
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleanedReply);

    return res.json({
      success: true,
      analysis,
      source: "Gemini AI",
    });

  } catch (error) {

    console.log("⚠ Gemini unavailable. Using fallback AI.");

    const analysis = generateFallbackAnalysis(
      revenue,
      expenses,
      budget
    );

    return res.json({
      success: true,
      analysis,
      source: "Fallback AI",
    });
  }
};
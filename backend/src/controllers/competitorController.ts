import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateCompetitorAnalysis = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      businessName,
      businessType,
      location,
      budget,
      language,
    } = req.body;

    const prompt = `
You are an expert startup consultant.

Generate a detailed Competitor Analysis.

Business Name: ${businessName}
Business Type: ${businessType}
Location: ${location}
Budget: ₹${budget}

Generate the ENTIRE response in ${language}.

Use ONLY ${language}.

Return Markdown.

Include exactly:

# Top Competitors

# Competitor Strengths

# Competitor Weaknesses

# Competitive Advantages

# Recommendations

Give practical business advice.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      analysis: response.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate competitor analysis",
    });
  }
};
import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateSWOT = async (
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
You are a senior business consultant.

Generate a professional SWOT Analysis.

Business Name: ${businessName}
Business Type: ${businessType}
Location: ${location}
Budget: ₹${budget}

Generate the ENTIRE response in ${language}.

Rules:
- Use ONLY ${language}
- Return Markdown
- Give practical business advice

Include exactly these sections:

# Strengths

# Weaknesses

# Opportunities

# Threats

Write 5-8 bullet points under each section.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      swot: response.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate SWOT Analysis",
    });
  }
};
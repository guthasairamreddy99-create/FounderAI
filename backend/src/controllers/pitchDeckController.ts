import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generatePitchDeck = async (
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

Create an investor-ready startup pitch deck in Markdown.

Business Name: ${businessName}
Business Type: ${businessType}
Location: ${location}
Budget: ₹${budget}

Generate exactly these sections:

# Slide 1 - Title

# Slide 2 - Problem

# Slide 3 - Solution

# Slide 4 - Market Opportunity

# Slide 5 - Business Model

# Slide 6 - Competitor Analysis

# Slide 7 - Financial Plan

# Slide 8 - Funding Requirement

# Slide 9 - Roadmap

# Slide 10 - Thank You

Each slide should contain concise bullet points suitable for a presentation.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      pitchDeck: response.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate pitch deck",
    });
  }
};
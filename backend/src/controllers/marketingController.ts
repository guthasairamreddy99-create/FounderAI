import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateMarketingCampaign = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      businessName,
      businessType,
      targetAudience,
      festival,
      language,
    } = req.body;

    const prompt = `
You are an expert Digital Marketing Consultant.

Generate the ENTIRE response in ${language}.

Business Name: ${businessName}

Business Type: ${businessType}

Target Audience: ${targetAudience}

Festival/Occasion: ${festival}

Return Markdown.

Generate:

# Instagram Caption

# Facebook Post

# Google Ad

# WhatsApp Promotion

# Email Campaign

# Marketing Strategy

# Best Hashtags
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      marketing: response.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate marketing campaign",
    });
  }
};
import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const getBusinessAdvice = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      revenue,
      budget,
      customers,
      growth,
      question,
    } = req.body;

    const prompt = `
You are an expert startup mentor.

Business Name: ${name}
Revenue: ₹${revenue}
Budget: ₹${budget}
Customers: ${customers}
Growth: ${growth}%

User Question:
${question}

Answer the user's question first.

Then provide:

1. Financial Advice

2. Marketing Strategy

3. Growth Opportunities

4. Risks

5. Business Score (0-100)

Keep the response under 300 words.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      advice: response.text,
    });
  } catch (error: any) {
  console.error("Gemini Error:");
  console.error(error);

  if (error.response) {
    console.error(error.response);
  }

  res.status(500).json({
    success: false,
    message: error.message || "Gemini AI Error",
  });
}
}
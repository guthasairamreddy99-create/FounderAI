import { Request, Response } from "express";
import { askGemini } from "../services/geminiService";

export const askAI = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      message: "Message is required",
    });
  }

  try {
    const reply = await askGemini(message);

    return res.json({
      success: true,
      reply,
      source: "Gemini AI",
    });

  } catch (error) {
    console.log("⚠ Gemini unavailable. Using fallback AI.");

    // Simple fallback responses
    let fallbackReply =
      "I couldn't contact Gemini AI right now. Please try again in a minute.";

    const text = message.toLowerCase();

    if (text.includes("marketing")) {
      fallbackReply = `
📢 Marketing Suggestions

• Post consistently on Instagram and Facebook.
• Offer limited-time discounts.
• Encourage customer reviews.
• Run targeted local ads.
• Build an email list for promotions.
`;
    } else if (text.includes("revenue")) {
      fallbackReply = `
📈 Revenue Suggestions

• Upsell premium products.
• Introduce referral programs.
• Improve customer retention.
• Focus on high-margin products.
• Analyze your best-selling services.
`;
    } else if (text.includes("expense") || text.includes("cost")) {
      fallbackReply = `
💰 Cost Reduction Tips

• Reduce unnecessary subscriptions.
• Negotiate with suppliers.
• Automate repetitive tasks.
• Track monthly expenses carefully.
• Optimize inventory.
`;
    } else {
      fallbackReply = `
🤖 FounderAI Advice

• Track your revenue weekly.
• Keep expenses under control.
• Invest in customer satisfaction.
• Build a strong online presence.
• Review your KPIs every month.
`;
    }

    return res.json({
      success: true,
      reply: fallbackReply,
      source: "Fallback AI",
    });
  }
};
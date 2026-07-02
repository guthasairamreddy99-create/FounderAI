import { Request, Response } from "express";
import { askGemini } from "../services/geminiService";

export const askAI = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const reply = await askGemini(message);

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      reply: "Sorry, I couldn't process your request right now.",
    });
  }
};
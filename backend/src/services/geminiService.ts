import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY not found in .env");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGemini(message: string) {
  const prompt = `
You are FounderAI.

You are an expert startup mentor.

Answer ONLY business related questions.

If someone asks anything unrelated to business,
politely tell them that FounderAI only answers business questions.

User:
${message}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}
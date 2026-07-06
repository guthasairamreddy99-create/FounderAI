import dotenv from "dotenv";
dotenv.config();

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

import forecastRoutes from "./routes/forecastRoutes";
import express from "express";
import cors from "cors";
import analysisRoutes from "./routes/analysisRoutes";
import connectDB from "./config/db";
import businessRoutes from "./routes/businessRoutes";
import aiRoutes from "./routes/aiRoutes";
import healthRoutes from "./routes/healthRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/business", businessRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/forecast", forecastRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FounderAI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
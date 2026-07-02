import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import businessRoutes from "./routes/businessRoutes";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/business", businessRoutes);

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
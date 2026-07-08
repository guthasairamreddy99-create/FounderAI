import express from "express";
import {
  generateCompetitorAnalysis,
} from "../controllers/competitorController";

const router = express.Router();

router.post("/", generateCompetitorAnalysis);

export default router;
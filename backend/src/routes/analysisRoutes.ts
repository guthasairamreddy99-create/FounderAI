import express from "express";
import { analyzeBusiness } from "../controllers/analysisController";

const router = express.Router();

router.post("/", analyzeBusiness);

export default router;
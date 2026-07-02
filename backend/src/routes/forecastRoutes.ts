import express from "express";
import { forecastBusiness } from "../controllers/forecastController";

const router = express.Router();

router.post("/", forecastBusiness);

export default router;
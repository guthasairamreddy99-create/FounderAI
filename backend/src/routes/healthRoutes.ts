import express from "express";
import { getBusinessHealth } from "../controllers/healthController";

const router = express.Router();

router.post("/", getBusinessHealth);

export default router;
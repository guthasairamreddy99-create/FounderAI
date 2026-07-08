import express from "express";
import {
  generateMarketingCampaign,
} from "../controllers/marketingController";

const router = express.Router();

router.post("/", generateMarketingCampaign);

export default router;
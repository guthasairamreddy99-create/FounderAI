import express from "express";

import {
  getBusinessAdvice,
} from "../controllers/aiController";

const router = express.Router();

router.post(
  "/business-advice",
  getBusinessAdvice
);

export default router;
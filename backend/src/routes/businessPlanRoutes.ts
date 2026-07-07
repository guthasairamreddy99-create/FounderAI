import express from "express";
import {
  generateBusinessPlan,
  getBusinessPlans,
  deleteBusinessPlan,
} from "../controllers/businessPlanController";

const router = express.Router();

router.post("/", generateBusinessPlan);
router.get("/", getBusinessPlans);
router.delete("/:id", deleteBusinessPlan);

export default router;
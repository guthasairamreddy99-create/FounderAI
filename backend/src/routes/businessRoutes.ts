import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  getBusinesses,
  createBusiness,
  deleteBusiness,
  updateBusiness,
} from "../controllers/businessController";

const router = express.Router();

router.get("/", protect, getBusinesses);

router.post("/", protect, createBusiness);

router.delete("/:id", protect, deleteBusiness);

router.put("/:id", protect, updateBusiness);

export default router;
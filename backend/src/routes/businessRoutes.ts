import express from "express";

import {
  getBusinesses,
  createBusiness,
  deleteBusiness,
  updateBusiness,
} from "../controllers/businessController";

const router = express.Router();

router.get("/", getBusinesses);

router.post("/", createBusiness);

router.delete("/:id", deleteBusiness);

router.put("/:id", updateBusiness);

export default router;
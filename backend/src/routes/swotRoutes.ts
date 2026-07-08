import express from "express";
import { generateSWOT } from "../controllers/swotController";

const router = express.Router();

router.post("/", generateSWOT);

export default router;
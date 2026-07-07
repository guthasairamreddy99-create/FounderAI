import express from "express";
import { generatePitchDeck } from "../controllers/pitchDeckController";

const router = express.Router();

router.post("/", generatePitchDeck);

export default router;
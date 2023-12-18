import express from "express";
import { addReview, getAllReviews } from "../controllers/review.js";

const router = express.Router();
router.get("/reviews", getAllReviews);
router.post("/reviews", addReview);


export default router



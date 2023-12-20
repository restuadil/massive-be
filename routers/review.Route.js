import express from "express";
import { addReview, deleteReviewById, getAllReviews, getReviewById, updateReviewById } from "../controllers/review.js";

const router = express.Router();
router.get("/reviews", getAllReviews);
router.get("/reviews/:id", getReviewById);
router.post("/reviews", addReview);
router.delete("/reviews/:id", deleteReviewById);
router.put("/reviews/:id", updateReviewById);


export default router



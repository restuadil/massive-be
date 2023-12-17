import express from "express";
import { addUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.post('/users', addUser)
router.get('/users', getAllUsers)

export default router
import express from "express";
import { addUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.js";

const router = express.Router();

router.post('/users', addUser)
router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', updateUserById)


export default router
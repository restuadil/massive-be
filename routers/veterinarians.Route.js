import express from "express";
import { addVet, deleteVetById, getAllVets, getVetById } from "../controllers/veterinarians.js";

const router = express.Router();

router.get('/veterinarians', getAllVets)
router.get('/veterinarians/:id', getVetById)
router.post('/veterinarians', addVet)
router.delete('/veterinarians/:id', deleteVetById)

export default router
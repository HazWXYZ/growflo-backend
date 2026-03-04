import express from "express";
import { getAllPlants, deletePlant, createPlant, updatePlant } from "../controllers/myplantsController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.post("/", createPlant);
router.put("/:id", updatePlant);
router.delete("/:id", deletePlant);

export default router;

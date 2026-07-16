import express from "express";

const router = express.Router();
import {
    getData,
    getById,
    addData,
    updateData,
    deleteData,
    getByWord
} from "../controllers/userController.js";

router.get("/", getData);
router.post("/", addData);
router.get("/search", getByWord);
router.get("/:id", getById);
router.patch("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
import express from "express";
import { userSchema} from "../middlewares/joiSchema/userSchema.js";
import {validate} from "../middlewares/validate.js";
import {
    getData,
    getById,
    addData,
    updateData,
    deleteData,
    getByWord
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", getData);
router.post("/", validate(userSchema), addData);
router.get("/search", getByWord);
router.get("/:id", getById);
router.patch("/:id", validate(userSchema), updateData);
router.delete("/:id", deleteData);

export default router;
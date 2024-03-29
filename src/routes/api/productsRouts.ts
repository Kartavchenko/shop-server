import express from "express";
import { ctrlWrapper } from "../../helpers";
import { getAll, getById } from "../../controllers/products";

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:category", ctrlWrapper(getAll));

router.get("/:id", ctrlWrapper(getById));

export default router;
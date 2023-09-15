import express from "express";
import validateBody from "../../middlewares/validateBody";
import { ctrlWrapper } from "../../helpers";
import { addToWishlistSchema } from "../../Schemas";
import { addToWishlist } from "../../controllers/wish/addToWishlist";
import { deleteFromWishlist } from "../../controllers/wish/deleteFromWishlist";
import { getWishlist } from "../../controllers/wish/getWishlist";

const router = express.Router();

router.get("/:userId", ctrlWrapper(getWishlist));

router.post("/", validateBody(addToWishlistSchema), ctrlWrapper(addToWishlist));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromWishlist));

export default router;
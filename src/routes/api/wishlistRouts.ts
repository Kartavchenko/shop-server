import express from "express";
import validateBody from "../../middlewares/validateBody";
import { ctrlWrapper } from "../../helpers";
import { addToWishlistSchema } from "../../Schemas";
import getWishlist from "controllers/wishList/getWishlist";
import addToWishlist from "controllers/wishList/addToWishlist";
import deleteFromWishlist from "controllers/wishList/deleteFromWishlist";

const router = express.Router();

router.get("/:userId", ctrlWrapper(getWishlist));

router.post("/", validateBody(addToWishlistSchema), ctrlWrapper(addToWishlist));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromWishlist));

export default router;
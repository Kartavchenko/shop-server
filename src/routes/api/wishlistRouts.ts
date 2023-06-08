import express from "express";
import validateBody from "../../middlewares/validateBody";
import { ctrlWrapper } from "../../helpers";
import { addToWishlistSchema } from "../../Schemas";
import { getWishlist } from "../../controllers/wishlist/getWishlist";
import { addToWishlist } from "../../controllers/wishlist/addToWishlist";
import { deleteFromWishlist } from "../../controllers/wishlist/deleteFromWishlist";

const router = express.Router();

router.get("/:userId", ctrlWrapper(getWishlist));

router.post("/", validateBody(addToWishlistSchema), ctrlWrapper(addToWishlist));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromWishlist));

export default router;
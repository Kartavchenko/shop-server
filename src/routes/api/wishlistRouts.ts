import express from "express";
import validateBody from "../../middlewares/validateBody";
import { ctrlWrapper } from "../../helpers";
import { addToWishlistSchema } from "../../Schemas";
import { addToWishlist, getWishlist, deleteFromWishlist } from "../../controllers/wishlist/index";

const router = express.Router();

router.get("/", ctrlWrapper(getWishlist));

router.post("/", validateBody(addToWishlistSchema), ctrlWrapper(addToWishlist));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromWishlist));

export default router;
import express from "express";
import validateBody from "../../middlewares/validateBody";
import { ctrlWrapper } from "../../helpers";
import { addToWishlistSchema } from "../../Schemas";
import { addToWishlist, getWishlist, deleteFromWishList } from "../../controllers/wishList";

const router = express.Router();

router.get("/", ctrlWrapper(getWishlist));

router.post("/", validateBody(addToWishlistSchema), ctrlWrapper(addToWishlist));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromWishList));

export default router;
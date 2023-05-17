import express from "express";
import { ctrlWrapper } from "../../helpers";
import { addToWishlist, getWishlist, deleteFromWishList } from "../../controllers/wishList";

const router = express.Router();

router.get("/", ctrlWrapper(getWishlist));

router.post("/", ctrlWrapper(addToWishlist));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromWishList));

export default router;
import { Request, Response } from "express";
import WishlistModel from "../../models/wishlistModel";
import { httpError } from "../../helpers";

export const getWishlist = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const result = await WishlistModel.findOne({ userId });

    // Throw an error if the wishlist doesn't exist
    if (!result) throw httpError(404, "Wishlist with this user not found");

    res.json(result);
};
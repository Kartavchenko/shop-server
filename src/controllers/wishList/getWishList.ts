import { Request, Response } from "express";
import WishlistModel from "../../models/wishlistModel";
import { httpError } from "../../helpers";

export const getWishlist = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const result = await WishlistModel.findOne({ userId });

    if (!result) return res.status(200).json({ message: 'No data found.' });

    // Throw an error if the user wishlist doesn't exist
    if (!userId) throw httpError(404, "Wishlist this user not found");

    res.json(result);
};
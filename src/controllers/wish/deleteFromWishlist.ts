import { Request, Response } from "express";
import { httpError } from "../../helpers";
import WishlistModel from "../../models/wishlistModel";

export const deleteFromWishlist = async (req: Request, res: Response) => {
    const { userId, itemId } = req.params;

    const user = await WishlistModel.findOne({ userId });

    // Throw an error if the user doesn't exist
    if (!user) throw httpError(404, "User with wishlist not found");

    // Remove from array of items in wishlist
    if (user) {
        const updateWishlist = await WishlistModel.findOneAndUpdate(
            { userId },
            { $pull: { items: { _id: itemId } } },
            { new: true }
        );

        if (!updateWishlist) throw httpError(404, "wish item not found");

        res.json({ message: "Item deleted" });
    }
};

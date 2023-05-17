import { Request, Response } from "express";
import { httpError } from "../../helpers";
import WishlistModel from "../../models/wishlistModel";

export const deleteFromWishList = async (req: Request, res: Response) => {
    const { userId, itemId } = req.params;
    
    const user = await WishlistModel.findOne({userId});

    if (!user) throw httpError(404, "User with wishlist not found");

    if (user) {
        const updateWishlist = await WishlistModel.findOneAndUpdate(
        { userId },
        { $pull: { items: {_id: itemId} } },
        { new: true }
        );

        if (!updateWishlist) throw httpError(404, "wish item not found");

        res.json({ message: "Item deleted" });
    } 
}
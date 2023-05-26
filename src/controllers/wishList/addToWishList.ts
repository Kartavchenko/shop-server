import { Request, Response } from "express";
import WishlistModel from "../../models/wishlistModel";

export const addToWishlist = async (req: Request, res: Response) => {
    const { userId, items } = req.body;

    const list = await WishlistModel.findOne({ userId });
    console.log(list?.items.map((item) => item._id));
    // check if item already exists in wishlist
    
    if (!list) {
        const createWishlist = await WishlistModel.create(req.body);

        res.status(201).json(createWishlist);
    } else {
        const updateWishlist = await WishlistModel.findOneAndUpdate(
        { userId },
        { $push: { items: items } },
        { new: true }
        );

        res.status(201).json(updateWishlist);
    }
}

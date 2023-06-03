import { Request, Response } from "express";
import WishlistModel from "../../models/wishlistModel";

export const addToWishlist = async (req: Request, res: Response) => {
    const { userId, items } = req.body;

    const list = await WishlistModel.findOne({ userId });

    // Create a new wishlist if the user doesn't have one
    if (!list) {
        const createWishlist = await WishlistModel.create(req.body);

        return res.status(201).json(createWishlist);
    }

    // Looping through the items array and get the _id of each item
    const listItems = list.items.map((item) => item._id);

    // Check if the item already exists in the wishlist
    const existItem = items.find((item: any) => listItems.includes(item._id));

    if (existItem) {
        return res.status(400).json({ message: "Item already in wishlist" });
    }

    // Add the new item to the wishlist if it doesn't exist
    const updateWishlist = await WishlistModel.findOneAndUpdate(
        { userId },
        { $push: { items: items } },
        { new: true }
    );

    res.status(201).json(updateWishlist);

}

import { Request, Response } from "express";
import WishlistModel from "../../models/wishlistModel";

export const getWishlist = async (req: Request, res: Response) => {
    const result = await WishlistModel.find();
    
    res.json(result);
}

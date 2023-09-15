var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import WishlistModel from "../../models/wishlistModel";
export const addToWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, items } = req.body;
    const list = yield WishlistModel.findOne({ userId });
    // Create a new wishlist if the user doesn't have one
    if (!list) {
        const createWishlist = yield WishlistModel.create(req.body);
        return res.status(201).json(createWishlist);
    }
    // Looping through the items array and get the _id of each item
    const listItems = list.items.map((item) => item.name);
    // Check if the item already exists in the wishlist
    const existItem = items.find((item) => listItems.includes(item.name));
    if (existItem) {
        return res.status(400).json({ message: "Item already in wishlist" });
    }
    // Add the new item to the wishlist if it doesn't exist
    const updateWishlist = yield WishlistModel.findOneAndUpdate({ userId }, { $push: { items: items } }, { new: true });
    res.status(201).json(updateWishlist);
});

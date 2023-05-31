"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToWishlist = void 0;
const wishlistModel_1 = __importDefault(require("../../models/wishlistModel"));
const addToWishlist = async (req, res) => {
    const { userId, items } = req.body;
    const list = await wishlistModel_1.default.findOne({ userId });
    // Create a new wishlist if the user doesn't have one
    if (!list) {
        const createWishlist = await wishlistModel_1.default.create(req.body);
        return res.status(201).json(createWishlist);
    }
    // Looping through the items array and get the _id of each item
    const listItems = list.items.map((item) => item._id);
    // Check if the item already exists in the wishlist
    const existItem = items.find((item) => listItems.includes(item._id));
    if (existItem) {
        return res.status(400).json({ message: "Item already in wishlist" });
    }
    // Add the new item to the wishlist if it doesn't exist
    const updateWishlist = await wishlistModel_1.default.findOneAndUpdate({ userId }, { $push: { items: items } }, { new: true });
    res.status(201).json(updateWishlist);
};
exports.addToWishlist = addToWishlist;

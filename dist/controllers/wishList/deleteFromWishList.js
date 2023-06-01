"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromWishList = void 0;
const helpers_1 = require("../../helpers");
const wishlistModel_1 = __importDefault(require("../../models/wishlistModel"));
const deleteFromWishList = async (req, res) => {
    const { userId, itemId } = req.params;
    const user = await wishlistModel_1.default.findOne({ userId });
    // Throw an error if the user doesn't exist
    if (!user)
        throw (0, helpers_1.httpError)(404, "User with wishlist not found");
    // Remove from array of items in wishlist
    if (user) {
        const updateWishlist = await wishlistModel_1.default.findOneAndUpdate({ userId }, { $pull: { items: { _id: itemId } } }, { new: true });
        if (!updateWishlist)
            throw (0, helpers_1.httpError)(404, "wish item not found");
        res.json({ message: "Item deleted" });
    }
};
exports.deleteFromWishList = deleteFromWishList;

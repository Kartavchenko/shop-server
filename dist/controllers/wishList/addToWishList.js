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
    const user = await wishlistModel_1.default.aggregate([
        { $match: { _id: (userId) } },
        { $unwind: '$items' },
        { $project: { itemIds: '$items.items.id' } },
    ]);
    console.log(user);
    if (!list) {
        const createWishlist = await wishlistModel_1.default.create(req.body);
        res.status(201).json(createWishlist);
    }
    else {
        const updateWishlist = await wishlistModel_1.default.findOneAndUpdate({ userId }, { $push: { items: items } }, { new: true });
        res.status(201).json(updateWishlist);
    }
};
exports.addToWishlist = addToWishlist;

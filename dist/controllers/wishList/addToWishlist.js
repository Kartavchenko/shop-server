"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToWishlist = void 0;
const wishlistModel_1 = __importDefault(require("../../models/wishlistModel"));
const addToWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, items } = req.body;
    const list = yield wishlistModel_1.default.findOne({ userId });
    // Create a new wishlist if the user doesn't have one
    if (!list) {
        const createWishlist = yield wishlistModel_1.default.create(req.body);
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
    const updateWishlist = yield wishlistModel_1.default.findOneAndUpdate({ userId }, { $push: { items: items } }, { new: true });
    res.status(201).json(updateWishlist);
});
exports.addToWishlist = addToWishlist;

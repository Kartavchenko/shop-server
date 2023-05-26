"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWishlist = void 0;
const wishlistModel_1 = __importDefault(require("../../models/wishlistModel"));
const getWishlist = async (req, res) => {
    const result = await wishlistModel_1.default.find();
    res.json(result);
};
exports.getWishlist = getWishlist;

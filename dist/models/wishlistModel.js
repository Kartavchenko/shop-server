"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wishlistSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        unique: true,
        required: [true, "User ID is required"],
    },
    items: [{
            name: {
                type: String,
                required: [true, "Name is required"],
            },
            price: {
                type: Number,
                required: [true, "Price is required"],
            },
            description: {
                type: String,
                required: [true, "Description is required"],
            },
            category: {
                type: String,
                required: [true, "Category is required"],
            },
            image_url: {
                type: String,
            },
            _id: {
                type: String,
                required: [true, "Pass _id is required"],
            }
        }
    ],
}, { versionKey: false });
const WishlistModel = (0, mongoose_1.model)("Wishlist", wishlistSchema, "wishlist");
exports.default = WishlistModel;

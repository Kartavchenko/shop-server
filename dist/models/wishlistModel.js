import { Schema, model } from "mongoose";
const wishlistSchema = new Schema({
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
        }
    ],
}, { versionKey: false });
const WishlistModel = model("Wishlist", wishlistSchema, "wishlist");
export default WishlistModel;

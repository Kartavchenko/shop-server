import { Schema, Types, model } from "mongoose";

interface UserWishlist {
    userId: string;
    items: Types.DocumentArray<Product>;
}

interface Product {
    _id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    image_url?: string;
}

const wishlistSchema = new Schema<UserWishlist>({
    userId: {
        type: String,
        unique: true,
        required: [true, "User ID is required"],
    },
    items: [
        {
        _id: {
            type: String,
            unique: true,
            required: [true, "ID is required"],
        },
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

const WishlistModel = model<UserWishlist>("Wishlist", wishlistSchema, "wishlist");

export default WishlistModel;
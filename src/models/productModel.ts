import { Schema, model } from "mongoose";

interface Product {
    name: string;
    price: number;
    description: string;
    category: string;
    image_url?: string;
}

const productSchema = new Schema<Product>({
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
}, { versionKey: false, timestamps: true });

const Product = model<Product>("Product", productSchema, "products");

export default Product;
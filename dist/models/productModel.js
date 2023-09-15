import { Schema, model } from "mongoose";
const productSchema = new Schema({
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
const Product = model("Product", productSchema, "products");
export default Product;

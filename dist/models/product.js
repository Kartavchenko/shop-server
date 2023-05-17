"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// interface ProductQueryHelpers {
//     byName(name: string): QueryWithHelpers<
//         HydratedDocument<Product>[],
//         HydratedDocument<Product>,
//         ProductQueryHelpers
//     >;
// }
// type ProductModelType = Model<Product, ProductQueryHelpers>;
const productSchema = new mongoose_1.Schema({
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
const Product = (0, mongoose_1.model)("product", productSchema);
exports.default = Product;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const historySchema = new mongoose_1.Schema({
    userId: {
        type: String,
        unique: true,
        required: [true, "User ID is required"],
    },
    orders: [{
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
                }]
        }],
}, { versionKey: false });
const HistoryModel = (0, mongoose_1.model)("History", historySchema, "history-orders");
exports.default = HistoryModel;

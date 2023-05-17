import { Schema, Types, model } from "mongoose";

interface UserHistory {
    userId: string;
    items: Types.DocumentArray<Product>;
}

interface Product {
    _id: Types.ObjectId;
    name: string;
    price: number;
    description: string;
    category: string;
    image_url?: string;
}

const historySchema = new Schema<UserHistory>({
    userId: {
        type: String,
        unique: true,
        required: [true, "User ID is required"],
    },
    items: [
        {
        _id: {
            type: Types.ObjectId,
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
}, { versionKey: false, timestamps: true });

const HistoryModel = model<UserHistory>("History", historySchema, "history-orders");

export default HistoryModel;
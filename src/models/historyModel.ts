import { Schema, Types, model } from "mongoose";

interface UserHistory {
    userId: string;
    orders: Types.DocumentArray<Items>;
}

interface Items {
    items: Types.DocumentArray<Product>;
}

interface Product {
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
    orders: [{
            items:
                [{
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

const HistoryModel = model<UserHistory>("History", historySchema, "history-orders");

export default HistoryModel;
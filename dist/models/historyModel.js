import { Schema, model } from "mongoose";
const historySchema = new Schema({
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
                        default: "https://t3.ftcdn.net/jpg/02/38/70/20/360_F_238702055_2MO2vhrRRLOvHMt9KRHMPmNgYfcGZrKS.jpg"
                    },
                    quantity: {
                        type: Number,
                        required: [true, "Quantity is required"],
                    }
                }],
            orderDate: {
                type: Date,
                default: Date.now,
            },
            totalPrice: {
                type: Number,
                required: [true, "Total price is required"],
            },
        }],
}, { versionKey: false });
const HistoryModel = model("History", historySchema, "history-orders");
export default HistoryModel;

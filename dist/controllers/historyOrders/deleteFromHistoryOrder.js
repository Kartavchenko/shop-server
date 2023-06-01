"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromHistoryOrder = void 0;
const helpers_1 = require("../../helpers");
const historyModel_1 = __importDefault(require("../../models/historyModel"));
const deleteFromHistoryOrder = async (req, res) => {
    const { userId, itemId } = req.params;
    const user = await historyModel_1.default.findOne({ userId });
    // Throw an error if the user doesn't exist
    if (!user)
        throw (0, helpers_1.httpError)(404, "User with history orders not found");
    // Remove from array of items in history orders
    const updateHistoryOrder = await historyModel_1.default.findOneAndUpdate({ userId }, { $pull: { orders: { _id: itemId } } }, { new: true });
    // Throw an error if the item doesn't exist
    if (!updateHistoryOrder)
        throw (0, helpers_1.httpError)(404, "history item not found");
    res.json({ message: "Item deleted" });
};
exports.deleteFromHistoryOrder = deleteFromHistoryOrder;

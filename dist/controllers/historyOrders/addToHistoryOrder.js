"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToHistoryOrder = void 0;
const historyModel_1 = __importDefault(require("../../models/historyModel"));
const addToHistoryOrder = async (req, res) => {
    const { userId, orders } = req.body;
    const history = await historyModel_1.default.findOne({ userId });
    if (!history) {
        const createHistory = await historyModel_1.default.create(req.body);
        return res.status(201).json(createHistory);
    }
    const updateHistory = await historyModel_1.default.findOneAndUpdate({ userId }, { $push: { orders: orders } }, { new: true });
    res.status(201).json(updateHistory);
};
exports.addToHistoryOrder = addToHistoryOrder;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoryOrder = void 0;
const historyModel_1 = __importDefault(require("../../models/historyModel"));
const getHistoryOrder = async (req, res) => {
    const result = await historyModel_1.default.find();
    res.json(result);
};
exports.getHistoryOrder = getHistoryOrder;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToHistoryOrder = void 0;
const product_1 = __importDefault(require("../../models/product"));
const addToHistoryOrder = async (req, res) => {
    const add = await product_1.default.create(req.body);
    res.status(201).json(add);
};
exports.addToHistoryOrder = addToHistoryOrder;

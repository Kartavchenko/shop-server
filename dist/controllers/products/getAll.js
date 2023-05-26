"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const productModel_1 = __importDefault(require("../../models/productModel"));
const getAll = async (req, res) => {
    const result = await productModel_1.default.find();
    res.json(result);
};
exports.getAll = getAll;

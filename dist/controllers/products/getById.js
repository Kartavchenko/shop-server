"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const productModel_1 = __importDefault(require("../../models/productModel"));
const helpers_1 = require("../../helpers");
const getById = async (req, res) => {
    const result = await productModel_1.default.findById(req.params.id);
    if (!result)
        throw (0, helpers_1.httpError)(404, "Product not found");
    res.json(result);
};
exports.getById = getById;

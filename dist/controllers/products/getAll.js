"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const productModel_1 = __importDefault(require("../../models/productModel"));
const getAll = async (req, res) => {
    const { page = 1, pageLimit = 10, query } = req.query;
    const totalProducts = await productModel_1.default.countDocuments();
    const totalPages = Math.ceil(totalProducts / Number(pageLimit));
    // Get products with query params
    const getProducts = await productModel_1.default.find({
        $or: [
            { name: { $regex: String(query), $options: "i" } },
            { description: { $regex: String(query), $options: "i" } },
        ],
    })
        .limit(Number(pageLimit))
        .skip((Number(page) - 1) * Number(pageLimit));
    // Get object with pagination info and products
    res.json({
        page: Number(page),
        pageLimit: Number(pageLimit),
        totalPages,
        totalProducts,
        getProducts,
    });
};
exports.getAll = getAll;

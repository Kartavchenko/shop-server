"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const productModel_1 = __importDefault(require("../../models/productModel"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, pageLimit = 10, query = '' } = req.query;
    const { category } = req.params;
    const totalProducts = yield productModel_1.default.countDocuments();
    const getAllProducts = yield productModel_1.default.find({});
    const getByCategory = yield productModel_1.default.find({ category: category });
    // Get products with query params
    const getProducts = yield productModel_1.default.find({
        $or: [
            { category: category },
            { name: { $regex: String(query), $options: "i" } },
            { category: { $regex: String(query), $options: "i" } },
        ],
    })
        .limit(Number(pageLimit))
        .skip((Number(page) - 1) * Number(pageLimit));
    const totalPages = yield Math.ceil(totalProducts / Number(pageLimit));
    // Get object with pagination info and products
    res.json({
        page: Number(page),
        pageLimit: Number(pageLimit),
        totalPages,
        totalProducts,
        getProducts,
        getAllProducts,
        getByCategory,
    });
});
exports.getAll = getAll;

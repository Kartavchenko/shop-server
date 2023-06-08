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
exports.addToHistoryOrder = void 0;
const historyModel_1 = __importDefault(require("../../models/historyModel"));
const addToHistoryOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, orders } = req.body;
    const history = yield historyModel_1.default.findOne({ userId });
    const getSumOfOrder = orders
        .map((order) => order
        .items.map((item) => item.price)
        .reduce((a, b) => a + b, 0));
    // Create a new history order if the user doesn't have one
    if (!history) {
        const createHistory = yield historyModel_1.default.create(req.body);
        return res.status(201).json(createHistory);
    }
    // Looping through the orders array and get the _id of each order
    const updateHistory = yield historyModel_1.default.findOneAndUpdate({ userId }, { $push: { orders: orders } }, { new: true });
    res.status(201).json(updateHistory);
});
exports.addToHistoryOrder = addToHistoryOrder;

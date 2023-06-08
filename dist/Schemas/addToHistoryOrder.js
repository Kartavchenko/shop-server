"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToHistoryOrderSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addToHistoryOrderSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
    orders: joi_1.default.array().items({
        orderDate: joi_1.default.date().default(Date.now),
        totalPrice: joi_1.default.number().required(),
        items: joi_1.default.array().items({
            name: joi_1.default.string().required(),
            price: joi_1.default.number().required(),
            description: joi_1.default.string().required(),
            category: joi_1.default.string().required(),
            image_url: joi_1.default.string().optional(),
        }).required(),
    })
});

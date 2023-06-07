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
exports.getHistoryOrder = void 0;
const historyModel_1 = __importDefault(require("../../models/historyModel"));
const helpers_1 = require("../../helpers");
const getHistoryOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield historyModel_1.default.findOne({ userId });
    // Throw an error if the history doesn't exist
    if (!result)
        throw (0, helpers_1.httpError)(404, "History with this user not found");
    res.json(result);
});
exports.getHistoryOrder = getHistoryOrder;

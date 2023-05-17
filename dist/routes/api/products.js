"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helpers_1 = require("../../helpers");
const products_1 = require("../../controllers/products");
const historyOrders_1 = require("../../controllers/historyOrders");
const router = express_1.default.Router();
router.get("/", (0, helpers_1.ctrlWrapper)(products_1.getAll));
router.get("/:id", (0, helpers_1.ctrlWrapper)(products_1.getById));
router.post("/history", (0, helpers_1.ctrlWrapper)(historyOrders_1.addToHistoryOrder));
router.put("/:id", helpers_1.ctrlWrapper);
// router.patch("/history", ctrlWrapper(addToHistoryOrder));
router.delete("/:id", helpers_1.ctrlWrapper);
exports.default = router;

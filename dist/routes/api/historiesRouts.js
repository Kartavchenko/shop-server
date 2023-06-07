"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("../../middlewares/validateBody"));
const helpers_1 = require("../../helpers");
const Schemas_1 = require("../../Schemas");
const historyOrders_1 = require("../../controllers/historyOrders");
const router = express_1.default.Router();
router.get("/:userId", (0, helpers_1.ctrlWrapper)(historyOrders_1.getHistoryOrder));
router.post("/", (0, validateBody_1.default)(Schemas_1.addToHistoryOrderSchema), (0, helpers_1.ctrlWrapper)(historyOrders_1.addToHistoryOrder));
router.delete("/:userId/:itemId", (0, helpers_1.ctrlWrapper)(historyOrders_1.deleteFromHistoryOrder));
exports.default = router;

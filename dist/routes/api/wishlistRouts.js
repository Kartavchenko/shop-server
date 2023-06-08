"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("../../middlewares/validateBody"));
const helpers_1 = require("../../helpers");
const Schemas_1 = require("../../Schemas");
const router = express_1.default.Router();
router.get("/:userId", helpers_1.ctrlWrapper);
router.post("/", (0, validateBody_1.default)(Schemas_1.addToWishlistSchema), helpers_1.ctrlWrapper);
router.delete("/:userId/:itemId", helpers_1.ctrlWrapper);
exports.default = router;

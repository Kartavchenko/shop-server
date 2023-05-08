"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_json_1 = __importDefault(require("../../../data/data.json"));
const router = express_1.default.Router();
const products = data_json_1.default;
router.get("/", async (req, res, next) => {
    res.json(products);
});
router.get("/:id", async (req, res, next) => {
    res.json(products);
});
router.post("/", async (req, res, next) => {
    res.json(products);
});
router.put("/:id", async (req, res, next) => {
    res.json(products);
});
router.delete("/:id", async (req, res, next) => {
    res.json(products);
});
exports.default = router;

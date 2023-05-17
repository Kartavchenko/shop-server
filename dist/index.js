"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_1 = __importDefault(require("./routes/api/products"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const { DATABASE_URL, PORT = 3001 } = process.env;
(async () => {
    try {
        await mongoose_1.default.connect(DATABASE_URL);
        await app.listen(PORT);
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
})();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use("/api/products", products_1.default);
app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Error");
});

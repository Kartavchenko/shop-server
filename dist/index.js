"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const productsRouts_1 = __importDefault(require("./routes/api/productsRouts"));
const historiesRouts_1 = __importDefault(require("./routes/api/historiesRouts"));
const wishlistRouts_1 = __importDefault(require("./routes/api/wishlistRouts"));
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
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use("/api/products", productsRouts_1.default);
app.use("/api/history-orders", historiesRouts_1.default);
app.use("/api/wishlist", wishlistRouts_1.default);
app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Error");
});

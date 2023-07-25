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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const productsRouts_1 = __importDefault(require("./routes/api/productsRouts"));
const historiesRouts_1 = __importDefault(require("./routes/api/historiesRouts"));
// import wishlistRouter from "./routes/api/wishlistRouts";
dotenv_1.default.config();
const app = (0, express_1.default)();
const { DATABASE_URL, PORT } = process.env;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(DATABASE_URL);
        yield app.get("/", (req, res) => {
            res.cookie('myCookie', 'cookieValue', {
                sameSite: 'strict',
                httpOnly: true,
                secure: true, // Optional: Ensure the cookie is only sent over HTTPS connections
            });
        });
        yield app.listen(PORT || 3001);
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}))();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://thriving-crostata-ea6435.netlify.app/"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Headers", "Origin", "X-Requested-With", "Accept"]
}));
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use("/api/products", productsRouts_1.default);
app.use("/api/history-orders", historiesRouts_1.default);
// app.use("/api/wishlist", wishlistRouter);
app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Error");
});

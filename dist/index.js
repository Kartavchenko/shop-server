var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sameSite from "./middlewares/setCookies";
import productsRouter from "./routes/api/productsRouts";
import historyOrdersRouter from "./routes/api/historiesRouts";
import wishlistRouter from "./routes/api/wishlistRouts";
dotenv.config();
const app = express();
const { DATABASE_URL, PORT } = process.env;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(DATABASE_URL);
        yield app.listen(PORT || 3001);
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}))();
app.use(cors({
    origin: ["http://localhost:3000", "https://thriving-crostata-ea6435.netlify.app"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Accept"]
}));
sameSite(app);
app.use(express.json());
app.use(express.static("public"));
app.use("/api/products", productsRouter);
app.use("/api/history-orders", historyOrdersRouter);
app.use("/api/wishlist", wishlistRouter);
app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Error");
});

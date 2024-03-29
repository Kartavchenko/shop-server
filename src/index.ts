import express, { Request, Response, NextFunction } from "express";
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

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: number;
    }
    interface Process {
      env: ProcessEnv;
      exit: (code?: number) => never;
    }
  }
}

(async () => {
  try {
    await mongoose.connect(DATABASE_URL);

    await app.listen(PORT || 3001);

  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}
)();


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

app.use((req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

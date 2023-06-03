import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productsRouter from "./routes/api/productsRouts";
import historyOrdersRouter from "./routes/api/historiesRouts";
// import wishlistRouter from "./routes/api/wishlistRouts";

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

    await app.listen(PORT || 3000);

  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
}
)();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.use("/api/products", productsRouter);

app.use("/api/history-orders", historyOrdersRouter);

// app.use("/api/wishlist", wishlistRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import productsRouter from "./routes/api/products";

const port = 3001;

const app = express();

app.use(cors());

app.use("/api/products", productsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
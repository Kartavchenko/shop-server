import express from "express";
import data from "../../data/data.json";

const router = express.Router();

interface Data {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
}

const products: Data[] = data;

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

export default router;
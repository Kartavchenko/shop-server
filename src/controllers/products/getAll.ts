import { Request, Response } from "express";
import Product from "../../models/productModel";

export const getAll = async (req: Request, res: Response) => {
    const result = await Product.find();
    
    res.json(result);
}

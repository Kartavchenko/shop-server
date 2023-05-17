import { Request, Response } from "express";
import Product from "../../models/productModel";
import { httpError } from "../../helpers";

export const getById = async (req: Request, res: Response) => {
    const result = await Product.findById(req.params.id);

    if (!result) throw httpError(404, "Product not found");
    
    res.json(result);
}

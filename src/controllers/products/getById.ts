import { Request, Response } from "express";
import Product from "../../models/productModel";
import { httpError } from "../../helpers";

export const getById = async (req: Request, res: Response) => {
    const result = await Product.findById(req.params.id);

    // Throw an error if the product doesn't exist
    if (!result) throw httpError(404, "Product not found");
    
    res.json(result);
}

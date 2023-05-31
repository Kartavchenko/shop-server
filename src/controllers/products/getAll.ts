import { Request, Response } from "express";
import Product from "../../models/productModel";

export const getAll = async (req: Request, res: Response) => {
    const { page = 1, pageLimit = 10 } = req.query;

    const totalProducts = await Product.countDocuments();

    const totalPages = Math.ceil(totalProducts / Number(pageLimit));
        
    // Get products with query params
    const getProducts = await Product.find()
        .limit(Number(pageLimit))
        .skip((Number(page) - 1) * Number(pageLimit));
        
    // Get object with pagination info and products
    res.json({
        page: Number(page),
        pageLimit: Number(pageLimit),
        totalPages,
        totalProducts,
        getProducts,
    });
}

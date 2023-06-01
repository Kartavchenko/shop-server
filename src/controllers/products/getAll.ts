import { Request, Response } from "express";
import Product from "../../models/productModel";

export const getAll = async (req: Request, res: Response) => {
    const { page = 1, pageLimit = 10, query } = req.query;

    const totalProducts = await Product.countDocuments();

    const totalPages = Math.ceil(totalProducts / Number(pageLimit));

    // Get products with query params
    const getProducts = await Product.find({
        $or: [
            { name: { $regex: String(query), $options: "i" } },
            { description: { $regex: String(query), $options: "i" } },
        ],
    })
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

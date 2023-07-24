import { Request, Response } from "express";
import Product from "../../models/productModel";

export const getAll = async (req: Request, res: Response) => {
    const { page = 1, pageLimit = 10, query = '' } = req.query;
    const { category } = req.params;

    const totalProducts = await Product.countDocuments();

    const getAllProducts = await Product.find({});

    const getByCategory = await Product.find({ category: category });

    // Get products with query params
    const getProducts = await Product.find({
        $or: [
            { category: category },
            { name: { $regex: String(query), $options: "i" } },
            { category: { $regex: String(query), $options: "i" } },
        ],
    })
        .limit(Number(pageLimit))
        .skip((Number(page) - 1) * Number(pageLimit));

    const totalPages = await Math.ceil(totalProducts / Number(pageLimit));

    // Get object with pagination info and products
    res.json({
        page: Number(page),
        pageLimit: Number(pageLimit),
        totalPages,
        totalProducts,
        getProducts,
        getAllProducts,
        getByCategory,
    });
}

import { Request, Response } from "express";
import HistoryModel from "../../models/historyModel";

export const addToHistoryOrder = async (req: Request, res: Response) => {
    const { userId, orders } = req.body;

    const history = await HistoryModel.findOne({userId});

    // Create a new history order if the user doesn't have one
    if (!history) {
        const createHistory = await HistoryModel.create(req.body);

        return res.status(201).json(createHistory);
    } 

    // Looping through the orders array and get the _id of each order
    const updateHistory = await HistoryModel.findOneAndUpdate(
        { userId },
        { $push: { orders: orders } },
        { new: true }
    );

    res.status(201).json(updateHistory);
}

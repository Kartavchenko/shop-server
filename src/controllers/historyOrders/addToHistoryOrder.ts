import { Request, Response } from "express";
import HistoryModel from "../../models/historyModel";

export const addToHistoryOrder = async (req: Request, res: Response) => {
    const { userId, orders } = req.body;

    const history = await HistoryModel.findOne({userId});

    if (!history) {
        const createHistory = await HistoryModel.create(req.body);

        return res.status(201).json(createHistory);
    } 

    const updateHistory = await HistoryModel.findOneAndUpdate(
        { userId },
        { $push: { orders: orders } },
        { new: true }
    );

    res.status(201).json(updateHistory);
}

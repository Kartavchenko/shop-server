import { Request, Response } from "express";
import HistoryModel from "../../models/historyModel";

export const addToHistoryOrder = async (req: Request, res: Response) => {
    const { userId, items } = req.body;

    const history = await HistoryModel.findOne({userId});

    if (!history) {
        const createHistory = await HistoryModel.create(req.body);

        res.status(201).json(createHistory);
    } else {
        const updateHistory = await HistoryModel.findOneAndUpdate(
        { userId },
        { $push: { items: items } },
        { new: true }
        );

        res.status(201).json(updateHistory);
    }
}

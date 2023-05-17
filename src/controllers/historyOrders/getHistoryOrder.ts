import { Request, Response } from "express";
import HistoryOrders from "../../models/historyModel";

export const getHistoryOrder = async (req: Request, res: Response) => {
    const result = await HistoryOrders.find();

    res.json(result);
}
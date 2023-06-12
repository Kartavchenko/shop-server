import { Request, Response } from "express";
import HistoryOrders from "../../models/historyModel";
import { httpError } from "../../helpers";

export const getHistoryOrder = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const result = await HistoryOrders.findOne({ userId });

    // Throw an error if the history doesn't exist
    if (!result) throw httpError(404, "History this user not found");

    res.json(result);
}
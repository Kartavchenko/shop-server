import { Request, Response } from "express";
import HistoryOrders from "../../models/historyModel";
import { httpError } from "../../helpers";

export const getHistoryOrder = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const result = await HistoryOrders.findOne({ userId });
    if (!result) return res.status(200).json({ message: 'No data found.' });

    // Throw an error if the history user doesn't exist
    if (!userId) throw httpError(404, "History this user not found");

    res.json(result);
}
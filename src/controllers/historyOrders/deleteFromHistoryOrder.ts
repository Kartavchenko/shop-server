import { Request, Response } from "express";
import { httpError } from "../../helpers";
import HistoryModel from "../../models/historyModel";

export const deleteFromHistoryOrder = async (req: Request, res: Response) => {
    const { userId, itemId } = req.params;
    
    const user = await HistoryModel.findOne({userId});

    if (!user) throw httpError(404, "User with history orders not found");

    const updateHistoryOrder = await HistoryModel.findOneAndUpdate(
        { userId },
        { orders: { $pull: { _id: itemId } } },
        { new: true }
    );
    
    if (!updateHistoryOrder) throw httpError(404, "history item not found");

    res.json({ message: "Item deleted" });
}
import { Request, Response } from "express";
import { httpError } from "../../helpers";
import HistoryModel from "../../models/historyModel";

export const deleteFromHistoryOrder = async (req: Request, res: Response) => {
    const { userId, itemId } = req.params;
    
    const user = await HistoryModel.findOne({ userId });

    // Throw an error if the user doesn't exist
    if (!user) throw httpError(404, "User with history orders not found");

    // Remove from array of items in history orders
    const updateHistoryOrder = await HistoryModel.findOneAndUpdate(
        { userId },
        { $pull: { orders: {_id: itemId} }},
        { new: true }
    );
    
    // Throw an error if the item doesn't exist
    if (!updateHistoryOrder) throw httpError(404, "history item not found");

    res.json({ message: "Item deleted" });
}
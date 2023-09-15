var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpError } from "../../helpers";
import HistoryModel from "../../models/historyModel";
export const deleteFromHistoryOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, itemId } = req.params;
    const user = yield HistoryModel.findOne({ userId });
    // Throw an error if the user doesn't exist
    if (!user)
        throw httpError(404, "User with history orders not found");
    // Remove from array of items in history orders
    const updateHistoryOrder = yield HistoryModel.findOneAndUpdate({ userId }, { $pull: { orders: { _id: itemId } } }, { new: true });
    // Throw an error if the item doesn't exist
    if (!updateHistoryOrder)
        throw httpError(404, "history item not found");
    res.json({ message: "Item deleted" });
});

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
import WishlistModel from "../../models/wishlistModel";
export const deleteFromWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, itemId } = req.params;
    const user = yield WishlistModel.findOne({ userId });
    // Throw an error if the user doesn't exist
    if (!user)
        throw httpError(404, "User with wishlist not found");
    // Remove from array of items in wishlist
    if (user) {
        const updateWishlist = yield WishlistModel.findOneAndUpdate({ userId }, { $pull: { items: { _id: itemId } } }, { new: true });
        if (!updateWishlist)
            throw httpError(404, "wish item not found");
        res.json({ message: "Item deleted" });
    }
});

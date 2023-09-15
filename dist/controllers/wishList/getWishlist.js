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
const getWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield WishlistModel.findOne({ userId });
    if (!result)
        return res.status(200).json({ message: 'No data found.' });
    // Throw an error if the user wishlist doesn't exist
    if (!userId)
        throw httpError(404, "Wishlist this user not found");
    res.json(result);
});
export default getWishlist;

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Product from "../../models/productModel";
import { httpError } from "../../helpers";
export const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product.findById(req.params.id);
    // Throw an error if the product doesn't exist
    if (!result)
        throw httpError(404, "Product not found");
    res.json(result);
});

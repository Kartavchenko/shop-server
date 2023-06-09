import express from "express";
import validateBody from "../../middlewares/validateBody";
import { ctrlWrapper } from "../../helpers";
import { addToHistoryOrderSchema } from "../../Schemas";
import { addToHistoryOrder, getHistoryOrder, deleteFromHistoryOrder } from "../../controllers/historyOrders";

const router = express.Router();

router.get("/:userId", ctrlWrapper(getHistoryOrder));

router.post("/", validateBody(addToHistoryOrderSchema), ctrlWrapper(addToHistoryOrder));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromHistoryOrder));

export default router;
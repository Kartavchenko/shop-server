import express from "express";
import { ctrlWrapper } from "../../helpers";
import { addToHistoryOrder, getHistoryOrder, deleteFromHistoryOrder } from "../../controllers/historyOrders";

const router = express.Router();

router.get("/", ctrlWrapper(getHistoryOrder));

router.post("/", ctrlWrapper(addToHistoryOrder));

router.delete("/:userId/:itemId", ctrlWrapper(deleteFromHistoryOrder));

export default router;
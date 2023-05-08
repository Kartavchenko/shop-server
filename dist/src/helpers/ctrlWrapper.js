"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrlWrapper = void 0;
const ctrlWrapper = (ctrl) => async (req, res, next) => {
    try {
        await ctrl(req, res, next);
    }
    catch (error) {
        next(error);
    }
};
exports.ctrlWrapper = ctrlWrapper;

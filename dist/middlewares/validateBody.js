"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const validateBody = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        throw (0, helpers_1.httpError)(400, error.message);
    }
    next();
};
exports.default = validateBody;

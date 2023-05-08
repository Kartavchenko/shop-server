"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
function httpError(status, message) {
    return new HttpError(status, message);
}
exports.default = httpError;

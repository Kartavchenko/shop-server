"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpError = void 0;
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
function httpError(status, message) {
    return new HttpError(status, message);
}
exports.httpError = httpError;

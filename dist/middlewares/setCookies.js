"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sameSite = (app) => app.use((req, res, next) => {
    res.cookie('myCommonCookie', 'commonValue', {
        sameSite: 'strict',
        httpOnly: true,
        secure: true, // The cookie is only sent over HTTPS connections
    });
    next();
});
exports.default = sameSite;

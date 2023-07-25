import { Request, Response, NextFunction } from "express";

const sameSite = (app: any) => app.use((req: Request, res: Response, next: NextFunction) => {
    res.cookie('myCommonCookie', 'commonValue', {
        sameSite: 'strict', // The SameSite attribute to 'strict'
        httpOnly: true, // The cookie accessible only through HTTP(S) requests
        secure: true, // The cookie is only sent over HTTPS connections
    });
    next();
});

export default sameSite;
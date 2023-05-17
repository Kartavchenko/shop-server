import { NextFunction  } from "express";

export const handleMongooseError = (error: any, data: any, next: NextFunction) => {
    const { name, code } = error;
    error.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next();
}
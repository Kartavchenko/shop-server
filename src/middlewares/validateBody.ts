import { Request, Response, NextFunction } from "express";
import { httpError } from "../helpers";

const validateBody = (schema: any) => 
    (req: Request, res: Response, next: NextFunction) => { 
        const { error } = schema.validate(req.body);
        if (error) {
            throw httpError(400, error.message);
        }
        next();
    }

export default validateBody;
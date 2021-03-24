import { HttpException } from "./../exceptions";
import { NextFunction, Request, Response } from "express";

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    return res.status(error.status || 500).json({ error: { message: error.message || "Some thing wrong !!!" } })
}
export default errorMiddleware;
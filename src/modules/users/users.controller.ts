import { HttpException } from "./../../core/exceptions";
import { NextFunction, Request, Response } from "express";

export default class UsersController {
    public index = (req: Request, res: Response, next: NextFunction) => {
        throw new HttpException(404, "Not found");
        return res.status(200).json({
            message: "Router Users Work !!!"
        })
    }
}
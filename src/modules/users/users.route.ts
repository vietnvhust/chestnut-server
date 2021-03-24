import { Router } from "express";
import { Route } from "./../../core/interfaces";
import UsersController from "./users.controller";

export default class UsersRoute implements Route {
    public path: string = "/api/users";
    public router: Router = Router();
    public usersController = new UsersController();
    constructor() {
        this.routes();
    }
    private routes() {
        this.router.get(this.path, this.usersController.index);
        this.router.post(this.path, this.usersController.createUser);
    }
}
import { errorMiddleware } from "./core/middleware";
import express from "express";
import { Route } from "./core/interfaces";
class App {
    public app: express.Application;
    public port: number | string;
    constructor(routes: Route[]) {
        this.app = express();
        this.port = 9000;
        this.middleware();
        this.routes(routes);
        this.errorMiddleware();
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Sever run port http://localhost:${this.port}`);
        })
    }
    private middleware() {
        this.app.use(express.json());
    }
    private errorMiddleware() {
        this.app.use(errorMiddleware)
    }
    private routes(routes: Route[]) {
        routes.forEach(route => {
            this.app.use("/", route.router);
        });
    }
}
export default App;
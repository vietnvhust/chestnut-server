import { Route } from "./core/interfaces";
import App from "./app";
import { UsersRoute } from "./modules/users";
const routes: Route[] = [
    new UsersRoute()
];
const app = new App(routes);
app.listen();
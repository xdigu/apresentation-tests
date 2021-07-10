import { Router } from "express";

import * as middlewares from "../middleware";

const routes = Router();

routes.get("/", middlewares.authMiddleware, middlewares.helloWorldMiddleware);

routes.get("/users", middlewares.usersMiddleware);

routes.get("/errors", middlewares.errorMiddleware);

routes.get("/requests", middlewares.requests);

export default routes;

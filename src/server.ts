import Express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";

import routes from "./routes";

const server = Express();

server.use(helmet());

// routes
server.use(routes);

// Handle errors
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: "A server error ocurred" });
});

export default server;

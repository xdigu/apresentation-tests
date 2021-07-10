import { Request, Response } from "express";

export default function helloWorld(req: Request, res: Response) {
  res.json({
    message: "Hello World!",
  });
}

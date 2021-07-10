import { NextFunction, Request, Response } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1] || "";

  if (token !== "1234") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
}

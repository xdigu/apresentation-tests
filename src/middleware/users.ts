import { Request, Response } from "express";

import { parseFullName, parseValueToUpperCase } from "../utils/users";

interface User {
  name: string;
  lastName: string;
  fullname?: string;
}

export default function Users(req: Request, res: Response) {
  const { name, lastName } = req.query as { [key: string]: string };

  const user: User = { name, lastName };

  if (!name || !lastName) {
    return res
      .status(400)
      .json({ message: "You must send name and lastName in query params." });
  }

  const parsedName = parseValueToUpperCase(user.name);
  const parsedLastName = parseValueToUpperCase(user.lastName);

  const fullName = parseFullName(user.name, user.lastName);

  return res.json({
    message: "ok",
    data: {
      name: parsedName,
      lastName: parsedLastName,
      fullName: fullName,
    },
  });
}

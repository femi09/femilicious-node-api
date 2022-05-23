import { Request, Response, NextFunction } from "express";

import { UserService } from "./user.service";

export class UserController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await UserService.getAll();

    res.status(200).send({ users });
  }
}

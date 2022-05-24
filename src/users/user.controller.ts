import { Request, Response, NextFunction } from "express";

import { UserService } from "./user.service";

export class UserController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await UserService.getAll();

    res.status(200).send({ message: "users fetched successfully", users });
  }

  static async getOneUser(req: Request, res: Response, next: NextFunction) {
    const user = await UserService.getOne(req.params.id);

    res
      .status(200)
      .send({ message: "user's details fetched successfully", data: user });
  }
}

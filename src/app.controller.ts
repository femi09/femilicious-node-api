import { Request, Response, NextFunction } from "express";

export class AppController {
  static async welcome(req: Request, res: Response, next: NextFunction) {
    res.status(200).send("WELCOME TO FEMILICIOUS NODE API!");
  }
}

import { Request, Response, NextFunction } from "express";
import { AuthenticationService } from "./auth.service";

export class AuthenticationController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const response = await AuthenticationService.register(req.body);
    if (response) {
      res.status(201).send({
        message: "user created successfully",
      });
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    const response = await AuthenticationService.login(req.body);

    if (response) {
      res.status(200).send({ message: "login successful", data: response });
    }
  }
}

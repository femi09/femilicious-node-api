import { HttpException } from "../exception";
import { Request, Response, NextFunction } from "express";
export const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message =
    err.message || "An unexpected error has occured, please try again!";

  res.status(status).send({ status, message });

  console.error(`Express server error: ${message}`);
};

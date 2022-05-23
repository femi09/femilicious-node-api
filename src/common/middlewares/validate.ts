import Joi, { Schema } from "joi";
import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exception";

export const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      error.details.map((err) => {
        next(new HttpException(err.message, 400));
      });
    } else {
      req.body = value;
      next();
    }
  };
};

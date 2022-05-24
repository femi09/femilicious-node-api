import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exception";
import jwt, { Secret } from "jsonwebtoken";
import { UserRepository } from "../../users/user.repository";

export const authorizationMiddleware = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      throw new HttpException("access denied! no token provided", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);

    req.user = await UserRepository.findById((decoded as any).id);
    next();
  } catch (error) {
    next(error);
  }
};

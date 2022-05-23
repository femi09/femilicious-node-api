import cors from "cors";
import express, { Application } from "express";
import home from "../app.route";
import auth from "../auth/auth.routes";
import user from "../users/user.routes";
import { errorMiddleware } from "./../common/middlewares/error";

const routes = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api/v1/", home);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/users", user);

  app.use(errorMiddleware);
};

export default routes;

import express from "express";
import { UserController } from "./user.controller";
import { authorizationMiddleware } from "../common/middlewares/authorization";

const router = express.Router();

router.route("/").get(authorizationMiddleware, UserController.getAll);

router.route('/:id').get(authorizationMiddleware, UserController.getOneUser)

export default router;

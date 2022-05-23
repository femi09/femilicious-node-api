import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.route("/").get(UserController.getAll);

export default router;

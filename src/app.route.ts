import express from "express";
import { AppController } from "./app.controller";

const router = express.Router();

router.route("/").get(AppController.welcome);

export default router;

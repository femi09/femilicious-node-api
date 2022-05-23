import express from "express";
import { AuthenticationController } from "./auth.controller";
import validateAuthSchema from "./validator/auth.validate.schema";
import { validateRequest } from "../common/middlewares/validate";
const { registerSchema, loginSchema } = validateAuthSchema;

const router = express.Router();

router
  .route("/register")
  .post(validateRequest(registerSchema), AuthenticationController.register);

router
  .route("/login")
  .post(validateRequest(loginSchema), AuthenticationController.login);

export default router;

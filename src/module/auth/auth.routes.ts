import express from "express";
import { authController } from "./auth.controller";
import { validateZodRequest } from "../../middleware/validateZodRequest";
import { userValidation } from "../user/user.validation";

const router = express.Router();

// register
router.post(
  "/signup",
  validateZodRequest(userValidation.createUserValidationSchema),
  authController.register
);
// login
router.post("/login", authController.login);

export const authRoute = router;

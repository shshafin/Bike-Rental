import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

// register
router.post("/signup", authController.register);
// login
router.post("/login", authController.login);

export const authRoute = router;

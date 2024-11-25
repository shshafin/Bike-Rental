import express from "express";
import { userController } from "./user.controller";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "./user.const";

const router = express.Router();

// register
router.get(
  "/me",
  auth(USER_ROLE.user, USER_ROLE.admin),
  userController.getUser
);

export const userRoute = router;

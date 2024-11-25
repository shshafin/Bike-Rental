import express from "express";
import { userController } from "./user.controller";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "./user.const";
import { validateZodRequest } from "../../middleware/validateZodRequest";
import { userValidation } from "./user.validation";

const router = express.Router();

// get user
router.get(
  "/me",
  auth(USER_ROLE.user, USER_ROLE.admin),
  userController.getUser
);
// update user
router.put(
  "/me",
  auth(USER_ROLE.user, USER_ROLE.admin),
  validateZodRequest(userValidation.updateUserValidationSchema),
  userController.updateUser
);

export const userRoute = router;

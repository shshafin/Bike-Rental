import express from "express";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../user/user.const";
import { validateZodRequest } from "../../middleware/validateZodRequest";
import { bikeValidation } from "./bike.validation";
import { bikeController } from "./bike.controller";

const router = express.Router();

// create bike
router.post(
  "/",
  auth(USER_ROLE.admin),
  validateZodRequest(bikeValidation.createBikeValidationSchema),
  bikeController.createBike
);
// get  bikes
router.get("/", bikeController.getBikes);
// update bike
router.put(
  "/:id",
  auth(USER_ROLE.admin),
  validateZodRequest(bikeValidation.updateBikeValidationSchema),
  bikeController.updateBike
);
// delete bike
router.delete("/:id", auth(USER_ROLE.admin), bikeController.deleteBike);

export const bikeRoute = router;

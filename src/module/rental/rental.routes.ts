import express from "express";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../user/user.const";
import { validateZodRequest } from "../../middleware/validateZodRequest";
import { RentalValidation } from "./rental.validation";
import { rentalController } from "./rental.controller";

const router = express.Router();

// create rental
router.post(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateZodRequest(RentalValidation.createRentalValidationSchema),
  rentalController.createRental
);
// get rentals
router.get("/", auth(USER_ROLE.user), rentalController.getRentals);
// return bike
router.put("/:id/return", auth(USER_ROLE.user), rentalController.returnBike);

export const rentalRoute = router;

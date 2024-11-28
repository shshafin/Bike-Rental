"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middleware/auth");
const user_const_1 = require("../user/user.const");
const validateZodRequest_1 = require("../../middleware/validateZodRequest");
const rental_validation_1 = require("./rental.validation");
const rental_controller_1 = require("./rental.controller");
const router = express_1.default.Router();
// create rental
router.post("/", (0, auth_1.auth)(user_const_1.USER_ROLE.admin, user_const_1.USER_ROLE.user), (0, validateZodRequest_1.validateZodRequest)(rental_validation_1.RentalValidation.createRentalValidationSchema), rental_controller_1.rentalController.createRental);
// get rentals
router.get("/", (0, auth_1.auth)(user_const_1.USER_ROLE.user), rental_controller_1.rentalController.getRentals);
// return bike
router.put("/:id/return", (0, auth_1.auth)(user_const_1.USER_ROLE.user), rental_controller_1.rentalController.returnBike);
exports.rentalRoute = router;

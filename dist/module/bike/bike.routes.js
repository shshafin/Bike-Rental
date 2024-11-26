"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middleware/auth");
const user_const_1 = require("../user/user.const");
const validateZodRequest_1 = require("../../middleware/validateZodRequest");
const bike_validation_1 = require("./bike.validation");
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
// create bike
router.post("/", (0, auth_1.auth)(user_const_1.USER_ROLE.admin), (0, validateZodRequest_1.validateZodRequest)(bike_validation_1.bikeValidation.createBikeValidationSchema), bike_controller_1.bikeController.createBike);
// get  bikes
router.get("/", bike_controller_1.bikeController.getBikes);
exports.bikeRoute = router;

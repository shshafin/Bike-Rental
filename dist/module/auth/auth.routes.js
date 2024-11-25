"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateZodRequest_1 = require("../../middleware/validateZodRequest");
const user_validation_1 = require("../user/user.validation");
const router = express_1.default.Router();
// register
router.post("/signup", (0, validateZodRequest_1.validateZodRequest)(user_validation_1.userValidation.createUserValidationSchema), auth_controller_1.authController.register);
// login
router.post("/login", auth_controller_1.authController.login);
exports.authRoute = router;

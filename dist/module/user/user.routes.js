"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middleware/auth");
const user_const_1 = require("./user.const");
const router = express_1.default.Router();
// register
router.get("/me", (0, auth_1.auth)(user_const_1.USER_ROLE.user, user_const_1.USER_ROLE.admin), user_controller_1.userController.getUser);
exports.userRoute = router;

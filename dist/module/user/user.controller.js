"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const AppError_1 = require("../../errors/AppError");
const catchAsync_1 = require("../../utils/catchAsync");
const user_service_1 = require("./user.service");
// Get user profile
const getUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userEmail = (_a = req.user) === null || _a === void 0 ? void 0 : _a.email;
    if (!userEmail) {
        throw new AppError_1.AppError(401, "User information is missing");
    }
    const user = yield user_service_1.userService.getUserIntoDB(userEmail);
    if (!user) {
        throw new AppError_1.AppError(404, "User not found");
    }
    res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: user,
    });
}));
// update user profile
const updateUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const userEmail = (_b = req.user) === null || _b === void 0 ? void 0 : _b.email;
    if (!userEmail) {
        throw new AppError_1.AppError(401, "User information is missing");
    }
    const updatedUser = yield user_service_1.userService.updateUserInDB(userEmail, req.body);
    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: updatedUser,
    });
}));
exports.userController = {
    getUser,
    updateUser,
};

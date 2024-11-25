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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const auth_service_1 = require("./auth.service");
const config_1 = __importDefault(require("../../config"));
// create user
const register = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.register(req.body);
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: result,
    });
}));
// login user
const login = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, accessToken, refreshToken } = yield auth_service_1.authService.login(req.body);
    //   cookie refresh
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: config_1.default.NODE_ENV === "production",
    });
    res.json({
        success: true,
        message: "User logged in successfully",
        token: accessToken,
        data: {
            _id: user === null || user === void 0 ? void 0 : user.id,
            name: user === null || user === void 0 ? void 0 : user.name,
            email: user === null || user === void 0 ? void 0 : user.email,
            phone: user === null || user === void 0 ? void 0 : user.phone,
            address: user === null || user === void 0 ? void 0 : user.address,
            role: user === null || user === void 0 ? void 0 : user.role,
        },
    });
}));
exports.authController = {
    register,
    login,
};

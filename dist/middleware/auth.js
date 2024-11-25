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
exports.auth = void 0;
const AppError_1 = require("../errors/AppError");
const catchAsync_1 = require("../utils/catchAsync");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../module/user/user.model");
const auth = (...roles) => {
    return (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // Authorization check
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.AppError(401, "Authorization token is missing or invalid");
        }
        try {
            // Verify token
            const verifiedToken = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
            // Extract role and email
            const { role, email } = verifiedToken;
            console.log({ role, email, verifiedToken });
            // User check
            const user = yield user_model_1.User.findOne({ email });
            console.log({ user });
            if (!user) {
                throw new AppError_1.AppError(403, "User not found");
            }
            // Role check
            if (!roles.includes(role)) {
                throw new AppError_1.AppError(401, "You have no access to this route");
            }
            // Attach user info to the request
            req.user = { email: user.email, role: user.role };
            next();
        }
        catch (error) {
            // Handle specific JWT errors
            if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                throw new AppError_1.AppError(403, "Invalid or expired token");
            }
        }
    }));
};
exports.auth = auth;

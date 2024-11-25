"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const config_1 = __importDefault(require("../config"));
const handleValidationError_1 = require("../errors/handleValidationError");
const handleCastError_1 = require("../errors/handleCastError");
const handleDuplicateError_1 = require("../errors/handleDuplicateError");
const AppError_1 = require("../errors/AppError");
const zod_1 = require("zod");
const handleZodError_1 = require("../errors/handleZodError");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "something went wrong";
    let errorSource = [
        {
            path: "",
            message: "An unknown error occurred",
        },
    ];
    //   mongoose error handler
    if (err.name === "ValidationError") {
        const simplified = (0, handleValidationError_1.handleValidationError)(err);
        statusCode = 400;
        message = simplified.message;
        errorSource = simplified.errorSource;
    }
    //   cast error handler
    else if (err.name === "CastError") {
        const simplified = (0, handleCastError_1.handleCastError)(err);
        statusCode = 400;
        message = simplified.message;
        errorSource = simplified.errorSource;
    }
    //   duplicate error handler
    else if (err.code === 11000) {
        const simplified = (0, handleDuplicateError_1.handleDuplicateError)(err);
        statusCode = 400;
        errorSource = simplified === null || simplified === void 0 ? void 0 : simplified.errorSource;
    }
    //   zod error handler
    else if (err instanceof zod_1.ZodError) {
        const simplified = (0, handleZodError_1.handleZodError)(err);
        statusCode = (simplified === null || simplified === void 0 ? void 0 : simplified.statusCode) || 400;
        message = simplified === null || simplified === void 0 ? void 0 : simplified.message;
        errorSource = simplified === null || simplified === void 0 ? void 0 : simplified.errorSource;
    }
    //   app error handler
    else if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode || 400;
        message = err.message;
        errorSource = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    //   error handler
    else if (err instanceof Error) {
        message = err.message;
        errorSource = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    // send response
    res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        stack: config_1.default.NODE_ENV === "development" ? err.stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;

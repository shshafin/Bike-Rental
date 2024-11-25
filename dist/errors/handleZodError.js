"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
const handleZodError = (err) => {
    const handleError = err.issues.map((err) => {
        return {
            path: err === null || err === void 0 ? void 0 : err.path[(err === null || err === void 0 ? void 0 : err.path.length) - 1],
            message: err === null || err === void 0 ? void 0 : err.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: err === null || err === void 0 ? void 0 : err.message,
        errorSource: handleError,
    };
};
exports.handleZodError = handleZodError;

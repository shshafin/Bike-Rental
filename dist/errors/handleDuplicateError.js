"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSource = [
        {
            path: err === null || err === void 0 ? void 0 : err.path,
            message: `${extractedMessage} already exists`,
        },
    ];
    return { errorSource };
};
exports.handleDuplicateError = handleDuplicateError;

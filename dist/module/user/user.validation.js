"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const user_const_1 = require("./user.const");
const createUserValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phone: zod_1.z.string(),
    address: zod_1.z.string(),
    role: zod_1.z.nativeEnum(user_const_1.USER_ROLE),
});
const updateUserValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
});
exports.userValidation = {
    createUserValidationSchema,
    updateUserValidationSchema,
};

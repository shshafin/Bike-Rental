"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidation = void 0;
const zod_1 = require("zod");
const createBikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    pricePerHour: zod_1.z.number(),
    cc: zod_1.z.number(),
    year: zod_1.z.number(),
    model: zod_1.z.string(),
    brand: zod_1.z.string(),
});
exports.bikeValidation = {
    createBikeValidationSchema,
};

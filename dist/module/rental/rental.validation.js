"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalValidation = void 0;
const zod_1 = require("zod");
const createRentalValidationSchema = zod_1.z.object({
    bikeId: zod_1.z.string(),
    startTime: zod_1.z.string(),
    returnTime: zod_1.z.date().nullable().default(null),
    totalCost: zod_1.z.number().default(0),
    isReturned: zod_1.z.boolean().default(false),
});
exports.RentalValidation = {
    createRentalValidationSchema,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const mongoose_1 = require("mongoose");
const rentalSchema = new mongoose_1.Schema({
    bikeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Bike",
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    returnTime: {
        type: Date || null,
        default: null,
    },
    totalCost: {
        type: Number,
        required: true,
        default: 0,
    },
    isReturned: {
        type: Boolean,
        default: false,
    },
});
exports.Rental = (0, mongoose_1.model)("Rental", rentalSchema);

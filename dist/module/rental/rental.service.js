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
exports.rentalService = void 0;
const mongoose_1 = require("mongoose");
const rental_model_1 = require("./rental.model");
const bike_model_1 = require("../bike/bike.model");
// create rental
const createRentalIntoDB = (userId, bikeId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const bike = yield bike_model_1.Bike.findById(bikeId);
        if (!bike || !bike.isAvailable) {
            throw new Error("Bike not available");
        }
        const result = yield rental_model_1.Rental.create([
            Object.assign({ userId,
                bikeId }, payload),
        ], { session });
        yield bike.updateOne({ isAvailable: false }, { session });
        yield session.commitTransaction();
        return result[0];
    }
    catch (error) {
        yield session.abortTransaction();
        throw error;
    }
    finally {
        session.endSession();
    }
});
exports.rentalService = {
    createRentalIntoDB,
};

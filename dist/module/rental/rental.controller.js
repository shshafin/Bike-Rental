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
exports.rentalController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const rental_service_1 = require("./rental.service");
const AppError_1 = require("../../errors/AppError");
// create rental
const createRental = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const { bikeId, startTime } = req.body;
    const result = yield rental_service_1.rentalService.createRentalIntoDB(userId, bikeId, {
        startTime,
    });
    if (result) {
        res.status(201).json({
            success: true,
            message: "Rental created successfully",
            data: result,
        });
    }
}));
// get rentals
const getRentals = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
    const rentals = yield rental_service_1.rentalService.getRentalsFromDB(userId);
    if (!rentals.length) {
        throw new AppError_1.AppError(404, "No rentals found");
    }
    res.status(200).json({
        success: true,
        message: "Rentals retrieved successfully",
        data: rentals,
    });
}));
// return bike
const returnBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { rentalId } = req.params;
    const updatedRental = yield rental_service_1.rentalService.returnBikeOfRental(req.params.id);
    if (updatedRental) {
        res.status(200).json({
            success: true,
            message: "Bike returned successfully",
            data: updatedRental,
        });
    }
}));
exports.rentalController = {
    createRental,
    getRentals,
    returnBike,
};

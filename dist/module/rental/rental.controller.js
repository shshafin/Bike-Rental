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
exports.rentalController = {
    createRental,
};

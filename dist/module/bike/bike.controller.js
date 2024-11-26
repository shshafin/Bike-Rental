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
exports.bikeController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const bike_service_1 = require("./bike.service");
const AppError_1 = require("../../errors/AppError");
const bike_model_1 = require("./bike.model");
// create bike
const createBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeService.createBikeIntoDB(req.body);
    res.status(201).json({
        success: true,
        message: "Bike added successfully",
        data: result,
    });
}));
// get bikes
const getBikes = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_service_1.bikeService.getBikeFromDB();
    if (!bikes.length) {
        throw new AppError_1.AppError(404, "No bikes found");
    }
    res.status(200).json({
        success: true,
        message: "Bikes retrieved successfully",
        data: bikes,
    });
}));
// update bike
const updateBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const isExistBike = yield bike_model_1.Bike.findOne({ id });
    if (!isExistBike) {
        throw new AppError_1.AppError(404, "Bike not found");
    }
    const updatedBike = yield bike_service_1.bikeService.updateBikeIntoDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "Bike updated successfully",
        data: updatedBike,
    });
}));
// delete bike
const deleteBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const isExistBike = yield bike_model_1.Bike.findOne({ id });
    if (!isExistBike) {
        throw new AppError_1.AppError(404, "Bike not found");
    }
    const deletedBike = yield bike_service_1.bikeService.deleteBikeFromDB(id);
    res.status(200).json({
        success: true,
        message: "Bike deleted successfully",
        data: deletedBike,
    });
}));
exports.bikeController = {
    createBike,
    getBikes,
    updateBike,
    deleteBike,
};

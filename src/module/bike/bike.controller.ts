import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { bikeService } from "./bike.service";
import { AppError } from "../../errors/AppError";
import { Bike } from "./bike.model";

// create bike
const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeService.createBikeIntoDB(req.body);
  res.status(201).json({
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

// get bikes
const getBikes = catchAsync(async (req: Request, res: Response) => {
  const bikes = await bikeService.getBikeFromDB();
  if (!bikes.length) {
    throw new AppError(404, "No bikes found");
  }
  res.status(200).json({
    success: true,
    message: "Bikes retrieved successfully",
    data: bikes,
  });
});

// update bike
const updateBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const isExistBike = await Bike.findOne({ id });
  if (!isExistBike) {
    throw new AppError(404, "Bike not found");
  }

  const updatedBike = await bikeService.updateBikeIntoDB(id, req.body);

  res.status(200).json({
    success: true,
    message: "Bike updated successfully",
    data: updatedBike,
  });
});

// delete bike
const deleteBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const isExistBike = await Bike.findOne({ id });
  if (!isExistBike) {
    throw new AppError(404, "Bike not found");
  }

  const deletedBike = await bikeService.deleteBikeFromDB(id);

  res.status(200).json({
    success: true,
    message: "Bike deleted successfully",
    data: deletedBike,
  });
});

export const bikeController = {
  createBike,
  getBikes,
  updateBike,
  deleteBike,
};

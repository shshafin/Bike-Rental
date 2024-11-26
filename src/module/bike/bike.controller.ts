import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { bikeService } from "./bike.service";

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
  res.status(200).json({
    success: true,
    message: "Bikes retrieved successfully",
    data: bikes,
  });
});
export const bikeController = {
  createBike,
  getBikes,
};

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

export const bikeController = {
  createBike,
};

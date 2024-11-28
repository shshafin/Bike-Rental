import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentalService } from "./rental.service";

// create rental
const createRental = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const { bikeId, startTime } = req.body;

  const result = await rentalService.createRentalIntoDB(userId, bikeId, {
    startTime,
  });

  if (result) {
    res.status(201).json({
      success: true,
      message: "Rental created successfully",
      data: result,
    });
  }
});

export const rentalController = {
  createRental,
};

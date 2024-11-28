import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentalService } from "./rental.service";
import { AppError } from "../../errors/AppError";

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

// get rentals
const getRentals = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const rentals = await rentalService.getRentalsFromDB(userId);
  if (!rentals.length) {
    throw new AppError(404, "No rentals found");
  }
  res.status(200).json({
    success: true,
    message: "Rentals retrieved successfully",
    data: rentals,
  });
});

// return bike
const returnBike = catchAsync(async (req: Request, res: Response) => {
  //   const { rentalId } = req.params;

  const updatedRental = await rentalService.returnBikeOfRental(req.params.id);

  if (updatedRental) {
    res.status(200).json({
      success: true,
      message: "Bike returned successfully",
      data: updatedRental,
    });
  }
});

export const rentalController = {
  createRental,
  getRentals,
  returnBike,
};

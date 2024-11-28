import { startSession } from "mongoose";
import { TRental } from "./rental.interface";
import { Rental } from "./rental.model";
import { Bike } from "../bike/bike.model";

// create rental
const createRentalIntoDB = async (
  userId: string,
  bikeId: string,
  payload: Partial<TRental>
) => {
  const session = await startSession();
  try {
    session.startTransaction();

    const bike = await Bike.findById(bikeId);

    if (!bike || !bike.isAvailable) {
      throw new Error("Bike not available");
    }

    const result = await Rental.create(
      [
        {
          userId,
          bikeId,
          ...payload,
        },
      ],
      { session }
    );

    await bike.updateOne({ isAvailable: false }, { session });

    await session.commitTransaction();

    return result[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const rentalService = {
  createRentalIntoDB,
};

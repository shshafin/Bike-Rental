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

// get rentals
const getRentalsFromDB = async (userId: string) => {
  const result = await Rental.find({ userId });
  return result;
};

// return bike

const returnBikeOfRental = async (rentalId: string) => {
  const session = await startSession();
  try {
    session.startTransaction();
    const rental = await Rental.findById(rentalId);

    if (!rental) {
      throw new Error("Rental not found");
    }

    const returnTime = new Date(); // Current time
    const startTime = new Date(rental?.startTime); // Rental start time

    // Calculate the difference in milliseconds
    const totalMilliseconds = returnTime.getTime() - startTime.getTime();

    // Convert milliseconds to hours
    const totalHours = Math.ceil(totalMilliseconds / (1000 * 60 * 60));

    const pricePerHour = 15; // Hourly price
    const totalCost = totalHours * pricePerHour;

    const result = await Rental.findByIdAndUpdate(
      rentalId,
      { returnTime: returnTime, isReturned: true, totalCost },
      { new: true, session }
    );

    await Bike.findByIdAndUpdate(
      rental.bikeId,
      {
        isAvailable: true,
      },
      { session }
    );

    await session.commitTransaction();

    return result;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const rentalService = {
  createRentalIntoDB,
  getRentalsFromDB,
  returnBikeOfRental,
};

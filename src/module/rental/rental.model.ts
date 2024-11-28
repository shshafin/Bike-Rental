import { model, Schema } from "mongoose";
import { TRental } from "./rental.interface";

const rentalSchema = new Schema<TRental>({
  bikeId: {
    type: Schema.Types.ObjectId,
    ref: "Bike",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  returnTime: {
    type: Date || null,
    default: null,
  },
  totalCost: {
    type: Number,
    required: true,
    default: 0,
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
});

export const Rental = model<TRental>("Rental", rentalSchema);

import mongoose from "mongoose";

export type TRental = {
  userId: mongoose.ObjectId;
  bikeId: mongoose.ObjectId;
  startTime: string;
  returnTime: string | null;
  totalCost: number;
  isReturned: boolean;
};

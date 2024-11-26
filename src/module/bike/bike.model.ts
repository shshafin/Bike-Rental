import { model, Schema } from "mongoose";
import { TBike } from "./bike.interface";

const bikeSchema = new Schema<TBike>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  cc: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

export const Bike = model<TBike>("Bike", bikeSchema);

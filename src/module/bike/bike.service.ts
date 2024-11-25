import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

// bike create
const createBikeIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload);
  return result;
};

export const bikeService = {
  createBikeIntoDB,
};

import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

// bike create
const createBikeIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload);
  return result;
};
// get bikes
const getBikeFromDB = async () => {
  const result = await Bike.find();
  return result;
};
// update bike
const updateBikeIntoDB = async (_id: string, payload: Partial<TBike>) => {
  const result = await Bike.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};
// delete bike
const deleteBikeFromDB = async (_id: string) => {
  const result = await Bike.findByIdAndUpdate(
    { _id },
    { isAvailable: false },
    { new: true }
  );
  return result;
};

export const bikeService = {
  createBikeIntoDB,
  getBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
};

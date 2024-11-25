import { TUser } from "./user.interface";
import { User } from "./user.model";

// get user
const getUserIntoDB = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

// update user
const updateUserInDB = async (email: string, updatedUser: Partial<TUser>) => {
  const result = await User.findOneAndUpdate({ email }, updatedUser, {
    new: true,
  });
  return result;
};

export const userService = {
  getUserIntoDB,
  updateUserInDB,
};

import { User } from "./user.model";

// get user
const getUserIntoDB = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

export const userService = {
  getUserIntoDB,
};

import { AppError } from "../../errors/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { userService } from "./user.service";

// Get user profile
const getUser = catchAsync(async (req, res) => {
  const userEmail = (req as any).user?.email;

  if (!userEmail) {
    throw new AppError(401, "User information is missing");
  }

  const user = await userService.getUserIntoDB(userEmail);

  if (!user) {
    throw new AppError(404, "User not found");
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});

// update user profile
const updateUser = catchAsync(async (req, res) => {
  const userEmail = (req as any).user?.email;

  if (!userEmail) {
    throw new AppError(401, "User information is missing");
  }

  const updatedUser = await userService.updateUserInDB(userEmail, req.body);

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: updatedUser,
  });
});

export const userController = {
  getUser,
  updateUser,
};

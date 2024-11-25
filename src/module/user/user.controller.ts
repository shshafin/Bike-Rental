import { AppError } from "../../errors/AppError";
import { CustomRequest } from "../../interface/types.interface";
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

export const userController = {
  getUser,
};

import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import config from "../../config";

// create user
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.register(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

// login user

const login = catchAsync(async (req: Request, res: Response) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);

  //   cookie refresh
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
  });

  res.json({
    success: true,
    message: "User logged in successfully",
    token: accessToken,
    data: {
      _id: user?.id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      role: user?.role,
    },
  });
});

export const authController = {
  register,
  login,
};

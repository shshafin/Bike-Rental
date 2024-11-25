import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { USER_ROLE } from "../module/user/user.const";
import { catchAsync } from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../module/user/user.model";

export const auth = (...roles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Authorization check
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(401, "Authorization token is missing or invalid");
    }

    try {
      // Verify token
      const verifiedToken = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;

      // Extract role and email
      const { role, email } = verifiedToken;

      // User check
      const user = await User.findOne({ email });
      if (!user) {
        throw new AppError(403, "User not found");
      }

      // Role check
      if (!roles.includes(role)) {
        throw new AppError(401, "You have no access to this route");
      }

      // Attach user info to the request
      (req as any).user = { email: user.email, role: user.role };

      next();
    } catch (error) {
      // Handle specific JWT errors
      if (error instanceof jwt.JsonWebTokenError) {
        throw new AppError(403, "Invalid or expired token");
      }
    }
  });
};

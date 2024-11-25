import config from "../../config";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.utils";
import jwt from "jsonwebtoken";

// register
const register = async (payload: TUser): Promise<any> => {
  // user existence check
  const user = await User.findOne({ email: payload?.email });
  if (user) throw new Error("User already exists");

  // create new user
  const newUser = await User.create(payload);
  return newUser;
};

// login
const login = async (payload: TLoginUser) => {
  // user existence check
  const user = await User.findOne({ email: payload?.email });
  if (!user) throw new Error("User doesn't exists! please register first");

  //   password check
  const isMatched = isPasswordMatched(payload?.password, user?.password);
  if (!isMatched) throw new Error("password not matched");

  //   jwt payload
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  //   access token
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  //   refresh token
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    }
  );

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
};

export const authService = {
  register,
  login,
};

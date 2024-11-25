import mongoose from "mongoose";
import { TErrorSource } from "../interface/error.interface";

export const handleCastError = (err: mongoose.Error.CastError) => {
  const errorSource: TErrorSource = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  return {
    success: false,
    message: "CastError",
    errorSource,
  };
};

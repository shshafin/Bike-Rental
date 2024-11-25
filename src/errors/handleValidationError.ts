import mongoose from "mongoose";
import { TErrorSource } from "../interface/error.interface";

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSource: TErrorSource = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );
  return {
    success: false,
    message: "Validation Error",
    errorSource,
  };
};

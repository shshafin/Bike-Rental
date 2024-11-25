import { ErrorRequestHandler } from "express";
import { TErrorSource } from "../interface/error.interface";
import config from "../config";
import { handleValidationError } from "../errors/handleValidationError";
import { handleCastError } from "../errors/handleCastError";
import { handleDuplicateError } from "../errors/handleDuplicateError";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";
import { handleZodError } from "../errors/handleZodError";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message = "something went wrong";
  let errorSource: TErrorSource = [
    {
      path: "",
      message: "An unknown error occurred",
    },
  ];

  //   mongoose error handler
  if (err.name === "ValidationError") {
    const simplified = handleValidationError(err);
    statusCode = 400;
    message = simplified.message;
    errorSource = simplified.errorSource;
  }
  //   cast error handler
  else if (err.name === "CastError") {
    const simplified = handleCastError(err);
    statusCode = 400;
    message = simplified.message;
    errorSource = simplified.errorSource;
  }
  //   duplicate error handler
  else if (err.code === 11000) {
    const simplified = handleDuplicateError(err);
    statusCode = 400;
    errorSource = simplified?.errorSource;
  }
  //   zod error handler
  else if (err instanceof ZodError) {
    const simplified = handleZodError(err);
    statusCode = simplified?.statusCode || 400;
    message = simplified?.message;
    errorSource = simplified?.errorSource;
  }
  //   app error handler
  else if (err instanceof AppError) {
    statusCode = err.statusCode || 400;
    message = err.message;
    errorSource = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }
  //   error handler
  else if (err instanceof Error) {
    message = err.message;
    errorSource = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  // send response
  res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    stack: config.NODE_ENV === "development" ? err.stack : null,
  });
};

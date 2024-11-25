import { ZodError } from "zod";

export const handleZodError = (err: ZodError) => {
  const handleError = err.issues.map((err) => {
    return {
      path: err?.path[err?.path.length - 1],
      message: err?.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: err?.message,
    errorSource: handleError,
  };
};

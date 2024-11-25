import { AnyZodObject } from "zod";
import { catchAsync } from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";

export const validateZodRequest = (Schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const parsedBody = await Schema.parseAsync(req.body);
    req.body = parsedBody.body ?? parsedBody;
    next();
  });
};

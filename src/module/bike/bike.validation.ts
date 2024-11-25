import { z } from "zod";

const createBikeValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.number(),
  cc: z.number(),
  year: z.number(),
  model: z.string(),
  brand: z.string(),
});

export const bikeValidation = {
  createBikeValidationSchema,
};

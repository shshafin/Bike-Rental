import { z } from "zod";

const createRentalValidationSchema = z.object({
  bikeId: z.string(),
  startTime: z.string(),
  returnTime: z.string().nullable().default(null),
  totalCost: z.number().default(0),
  isReturned: z.boolean().default(false),
});

export const RentalValidation = {
  createRentalValidationSchema,
};

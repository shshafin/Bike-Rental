import { z } from "zod";
import { USER_ROLE } from "./user.const";

const createUserValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  address: z.string(),
  role: z.nativeEnum(USER_ROLE),
});

const updateUserValidationSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
});

export const userValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
};

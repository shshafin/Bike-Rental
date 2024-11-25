import bcryptjs from "bcryptjs";

export const isPasswordMatched = async (
  plainPassword: string,
  hashedPassword: string
) => {
  const isMatch = await bcryptjs.compare(plainPassword, hashedPassword);
  return isMatch;
};

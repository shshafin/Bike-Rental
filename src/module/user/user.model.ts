import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE } from "./user.const";
import bcryptjs from "bcryptjs";
import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [7, "Password must be at least 7 characters long"],
      select: 0, // Exclude password from the response
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: Object.keys(USER_ROLE),
    },
  },
  { timestamps: true }
);

// password hash pre hook middleware
userSchema.pre("save", async function (next) {
  this.password = await bcryptjs.hash(
    this.password,
    Number(config.salt_rounds)
  );
  next();
});

// password hide post hook middleware

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// password match pre hook middleware

export const User = model<TUser>("User", userSchema);

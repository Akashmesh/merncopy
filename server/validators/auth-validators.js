// validators/auth-validators.js
const { z } = require("zod");

// ✅ Signup schema (improved)
const signupSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "name must be atleast 3 characters long" })
    .max(50, { message: "maximum 50 characters for username" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .toLowerCase()
    .min(3, { message: "email must be atleast 3 characters long" })
    .max(255, { message: "maximum 255 characters for email" })
    .email({ message: "invalid email format" }),

  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .regex(/^[0-9]{10}$/, {
      message: "phone must be exactly 10 digits (numbers only)",
    }),

  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(5, { message: "password must be atleast 5 characters long" })
    .max(1024, { message: "maximum 1024 characters for password" }),
});

// ✅ Login schema (new)
const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .toLowerCase()
    .email({ message: "invalid email format" }),

  password: z
    .string({ required_error: "password is required" })
    .trim()
});

module.exports = { signupSchema, loginSchema };

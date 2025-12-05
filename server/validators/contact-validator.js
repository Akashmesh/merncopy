const {z} = require("zod");

const contactSchema = z.object ({
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
    message :z.string({required_error : "message is required"}).
    trim()
    .min(25, {message :"message must be atlease 25 characters long"})
    .max(1024, {message: "maximum 1024 characters"})
});

module.exports = contactSchema;
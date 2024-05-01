const {z} = require('zod');

//  Creating an object schema

const signupSchema = z.object({
    userName : z
                .string({required_error : "Name is required"})
                .trim()
                .min(3, {message : "Name must be at least of 3 chars"})
                .max(255, {message : "Name must not be more than 255 characters"}),

    email : z
              .string({ required_error : "Email is required"})
              .trim()
              .email({message : "Invalid email"})
              .min(3, {message : "Email must be at least of 3 chars"})
              .max(255, {message : "Email must not be more than 255 characters"}),

    phone : z
              .string({required_error : "Phone is required"})
              .trim()
              .min(10, {message : "Phone must be at least 10 char"})
              .max(20, {message : "Email must not be more than 20 characters"}),

    password : z 
                .string({ required_error : "Phone is required"})
                .min(6, {message : "Password must be at least 6 char"})
              .max(1024, {message : "Password must not be more than 1024 characters"})
,
})

module.exports = signupSchema ;

import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2,{message:'Too Short!'}),
    username: z.string().min(2, { message: 'Too Short!' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters ' }),
    email:z.string().email(),
  })
export const SigninValidation = z.object({
    password: z.string().min(8, { message: 'Password must be at least 8 characters ' }),
    email:z.string().email(),
  })
export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    location: z.string().min(2).max(200),
    tags: z.string(),
    file:z.custom<File[]>(),
})
  
export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});
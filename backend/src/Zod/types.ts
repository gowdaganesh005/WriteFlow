import { z } from 'zod'

export const UserSignUp=z.object({
    name: z.string({message:"Enter Valid Name"}),
    email: z.string().email({message:"Enter Valid Name"}),
    password: z.string({message:"Please Enter the password"}).min(6,{message:"Password must be atleast 6 characters"})
})
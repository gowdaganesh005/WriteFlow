
import { z } from 'zod'

export const UserSignUp=z.object({
    name: z.string({message:"Enter Valid Name"}),
    email: z.string().email({message:"Enter Valid Name"}),
    password: z.string({message:"Please Enter the password"}).min(6,{message:"Password must be atleast 6 characters"})
})

export const UserSignIn=UserSignUp.extend({name: z.string().optional(), password:z.string({message: "Provide the password"})});


export const BlogSchema=z.object({
    title:z.string({message:"Enter Valid Title"}),
    content:z.string({message:"Enter Valid Content"}).min(10,{message:"Content length must be at least 30 Characters"}),
    

})

export const BlogUpdateSchema=z.object({
    title:z.string().optional(),
    content:z.string().optional()
})

export type UserSignUptype=z.infer<typeof UserSignUp>

export type UserSignIntype=z.infer<typeof UserSignIn>

export type Blogtype=z.infer<typeof BlogSchema>

export type BlogUpdatetype=z.infer<typeof BlogUpdateSchema>

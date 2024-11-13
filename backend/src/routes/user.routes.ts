import { Hono } from 'hono';

import z from 'zod'
import Client from '../util/prismaClient';
// import bcrypt from 'bcrypt'
import { sign } from 'hono/jwt';
import { comparePass, hashpassword } from '../util/hashing';
import { UserSignIn,UserSignUp,UserSignIntype,UserSignUptype } from 'gowda04-writeflow-common';



export const app=new Hono({strict:false});



app.post('/signup',async(c:any)=>{
    const client=Client(c);
    let body;
    try {
         body=await c.req.json()
        
    } catch (error) {
        c.status(400)
        return c.json({message:"InValid Input NO BODY INPUT",
           
        })
    }
    const userdata:UserSignUptype={
        name: body.name,
        email: body.email,
        password: body.password
    }
    try {
        UserSignUp.parse(userdata)
    } catch (error:any) {
        c.status(400)
        return c.json({message: error.issues[0].message})
        
    }
    

    
    const exists=await client.user.findFirst({
            where:{
                email: userdata.email
            }
        })
        if(exists){
            c.status(403)
            return c.json({message: `User with the email already exists`})
        }

    userdata.password=await hashpassword(userdata.password);
    
    
    
    let generateduser;
    try{
         generateduser=await client.user.create({
            data:{
                name: userdata.name,
                email: userdata.email,
                password: userdata.password
            },
            select:{
                userid:true
            }
        })
    }catch(error:any){
        c.status(500)
        return c.json({message:  error})
    }

    c.status(200)
    return c.json({
        message:"user created",
        userid: generateduser

    })

    


})


app.post('/signin',async (c:any)=>{
    const client=Client(c);
    let body;
    try {
         body=await c.req.json()
        
    } catch (error) {
        c.status(400)
        return c.json({message:"InValid Input NO BODY INPUT",
           
        })
    }
    const userdata:UserSignIntype={
       
        email: body.email,
        password: body.password
    }
    try {
        UserSignIn.parse(userdata)
    } catch (error:any) {
        c.status(400)
        return c.json({message: error.issues[0].message})
        
    }

    const user=await client.user.findFirst({
        where:{
            email:userdata.email
        },
        select:{
            userid: true,
            email: true,
            name: true,
            password: true
        }
    })

    if(!user){
        c.status(404)
        return c.json({message: "User Does not exists"})
    }
    const isValid=await comparePass(userdata.password,user.password)

    if(!isValid){
        c.status(403)
        return c.json({message: "Invalid Password"})
    }

    const token=await sign({userid:user.userid},c.env.JWT_KEY)



    c.status(200)
    return c.json({
        message:"User Logged in ",
        token:token
    })



})

export default app;
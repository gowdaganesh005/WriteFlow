import { Hono } from 'hono';
import { UserSignUp } from '../Zod/types';
import z from 'zod'
import Client from '../util/prismaClient';

type UserSignUptype=z.infer<typeof UserSignUp>

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

    try{
        await client.user.findFirst({
            where:{
                email: userdata.email
            }
        })
    }catch(error){
        c.status(403)
        return c.json({message: error})
    }
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
    }catch(error){
        c.status(500)
        return c.json({message: error})
    }

    c.status(200)
    return c.json({
        message:"user created",
        userid: generateduser

    })

    


})


app.post('/signup',async(c:any)=>{})

export default app;
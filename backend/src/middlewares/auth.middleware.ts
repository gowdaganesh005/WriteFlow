import { Context } from "hono"
import { decode, verify } from "hono/jwt"


export const authmiddleware=async (c:Context,next:()=>void)=>{
    const authheader=  c.req.header("Authorization")
    if(!authheader?.startsWith("Bearer")){
        c.status(403)
        return c.json({message:"UnAuthorized Request"})
    }
    const token=authheader.split(" ")[1]
    try {
       await verify(token,c.env.JWT_KEY)
    } catch (error) {
        c.status(403)
        return c.json({message:"UnAuthorized Request"})
    }
    
    const data=decode(token);
    c.set("userid",data.payload.userid)
    return next()
    
}
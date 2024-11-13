import { Hono } from "hono";
import { BlogSchema, BlogUpdateSchema } from "gowda04-writeflow-common";
import { authmiddleware } from "../middlewares/auth.middleware";
import Client from "../util/prismaClient";

interface Blogtype{
    title: string
    content: string
    userid: string

}


 const app=new Hono({strict:false});

app.post("/blog",authmiddleware,async(c:any)=>{
    const client=Client(c);
    const userid:string=c.get('userid')

    const body=await c.req.json();
    const userdata:Blogtype={
        title:body.title,
        content:body.content,
        userid: userid
    }

    try {
        BlogSchema.parse(userdata)
    } catch (error:any) {
        c.status(400)
        return c.json({message: error.issues[0].message})
    }
    let response;
   try {
     response=await client.post.create({
         data:{
             title:userdata.title,
             content: userdata.content,
             authorid: userid
         },
         select:{
             postid:true,
             title: true
         }
     })
   } catch (error) {
    c.status(500)
    return c.json({message:"Failed to Post\nInternal Server Error"})
}
   
    if(!response){
        c.status(500)
        return c.json({message:"Failed to Post\nInternal Server Error"})
    }

    c.status(200)
    return c.json({message:"Created the Post",
        postid: response.postid
    })
});

app.get("/blog/:id",async(c:any)=>{
    const client=Client(c);
    const id=await c.req.param('id');
    let blog;
    try {
         blog=await client.post.findFirst({
            where:{
                postid: id
            }
        })
    } catch (error) {
        c.status(500)
        return c.json({message:"Failed to fetch Post\nInternal Server Error",
            error: error
        })
    }
    if(!blog){
        c.status(500)
        return c.json({message:"Failed to fetch Post"})

    }
    c.status(200);
    return c.json(blog)
});

app.get("/blog",async(c:any)=>{
    const client=Client(c);
   
    let blog;
    try {
         blog=await client.post.findMany({})
    } catch (error) {
        c.status(500)
        return c.json({message:"Failed to fetch Posts\nInternal Server Error",
            error: error
        })
    }
    if(!blog){
        c.status(500)
        return c.json({message:"Failed to fetch Post"})

    }
    c.status(200);
    return c.json(blog)
});

app.get("/blog",authmiddleware,async(c:any)=>{
    const client=Client(c)
    // const id:string=await c.req.param('id');
    const userid:string=c.get("userid")
    let blog;
    try {
         blog=await client.post.findFirst({
            where:{
                authorid: userid
            }
        })
    } catch (error) {
        c.status(500)
        return c.json({message:"Failed to fetch Post\nInternal Server Error",
            error: error
        })
    }
    if(!blog){
        c.status(500)
        return c.json({message:"Failed to fetch Posts"})

    }
    c.status(200);
    return c.json(blog)
    
    
})

app.put("/blog/:id",authmiddleware,async(c:any)=>{
    const client=Client(c)
    const id:string=await c.req.param('id');
    const userid:string=c.get("userid")
    let blog;
    try {
         blog=await client.post.findFirst({
            where:{
                postid: id,
                authorid: userid
            }
        })
    } catch (error) {
        c.status(500)
        return c.json({message:"Failed to fetch Post\nInternal Server Error",
            error: error
        })
    }
    if(!blog){
        c.status(500)
        return c.json({message:"Post does not exists Unauthorized Access"})

    }
    const body=await c.req.json();
    const userdata={
        title:body.title,
        content:body.content,
        
    }
    BlogUpdateSchema.parse(userdata)
    let response;
    try {
     response=await client.post.update({
            where:{
                authorid: userid,
                postid:id
            },
            data:{
                title:userdata.title,
                content:userdata.content
    
            }
        })
    } catch (error) {
        c.status(500)
        return c.json({message:"Internal server error"})
        
    }

    c.status(200);
    return c.json(response)
    
    
})


export default app
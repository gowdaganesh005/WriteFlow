import { Hono } from "hono";

 const app=new Hono({strict:false});

app.post("/blog",async()=>{});

app.get("/blog/:id",async()=>{});

app.get("/blog",async()=>{});


export default app
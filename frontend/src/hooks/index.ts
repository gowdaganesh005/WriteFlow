import { useEffect, useState } from "react"
import { BACKEND_URL } from "../tsconfig"
import axios from "axios"

export interface BlogType{
    postid: string,
    title: string
    content: string
    author: {
        name: string
    }
    publishedDate: string
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true)
    const [blogs,setBlogs]=useState<BlogType[]>([])

    useEffect(()=>{
        
        axios.get(`${BACKEND_URL}/blog`)
        .then((response)=>{
            setBlogs(response.data)
            setLoading(false)
        })
    },[])
    
    return {loading , blogs}

    
}

export const useFetchBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true)
    const [blog,setBlog]=useState<BlogType>()

    useEffect(()=>{
        console.log(id)
        console.log("request sent")
         axios.get(`${BACKEND_URL}/blog/${id}`)
        .then((response)=>{
            
            setBlog(response.data)
            
            setLoading(false)
        })
        
        

        
    },[])

    


  
    
    return {loading , blog }
}
import { useParams } from "react-router-dom"
import { useFetchBlog } from "../hooks"
import { BlogCard } from "../components/BlogCard"




export const Blog=()=>{
    const { id }=useParams()
    
    const {loading,blog}=useFetchBlog({id:id?.toString() || ""})

    if(loading){
        return(
            <div>Loading ... </div>
        )
    }
    return(
        <>
        <BlogCard blog={blog} />
        


        </>
    )
}
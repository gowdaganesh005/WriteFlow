import { BlogListCard } from "../components/BlogListCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"



export const Blogs=()=>{
    const {loading ,blogs} =useBlogs()

    if(loading){
        return <div>Loading</div>
    }

    

    return(


        <>
        <Appbar/>
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col w-full sm:w-4/5 ">
            {blogs.map(blog=>
                 <BlogListCard
                 id={blog.postid}
                 authorname={blog.author.name}
                 title={blog.title}
                 content={blog.content}
                 publishedDate={blog.publishedDate}
                 />
            )}

       
        
            
           
        
        
        </div>
        </div>
        </>
    )

}
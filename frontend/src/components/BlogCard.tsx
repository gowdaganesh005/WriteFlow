import { BlogType } from "../hooks/index"
import { Appbar } from "./Appbar";
import { Avatar } from "./Avatar";


export const BlogCard=({blog}:{blog:BlogType | undefined})=>{
    console.log(blog);

    
    return(
        <>
        <Appbar/>
        
        <div className="grid grid-cols-12 w-full">
        <div className="col-span-9   w-full flex justify-center h-screen ">  
        <div className="bg-slate-50 w-4/5 m-3 p-5 rounded-xl shadow-sm">
        <div className="text-4xl md:text-5xl   py-10 font-bold"> {blog?.title}</div>
        <div className="text-lg ">{blog?.content}</div>
        </div>
        </div>
        <div className="col-span-3 w-full">
            <div className="bg-slate-50 w-4/5 m-3  rounded-xl shadow-sm">
            <div className="px-4">
            <div className="flex ">
                <div className="py-4 px-1">
            <Avatar name={blog?blog?.author.name:""}  type="small"/>
            </div>
           <div className="text-2xl  py-3 font-bold"> {blog?.author.name}</div>
           </div>
           <div className="  py-2 px-2 font-medium text-slate-800 ">Published On</div>
           <div className="  py-2 px-2 font-medium text-slate-500">{"12 Nov 2024"}</div>
            </div>
            </div>
        </div>
        </div>
        </>
    )

}
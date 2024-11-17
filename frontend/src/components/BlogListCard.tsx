import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface Blogtype{
    id: string
    authorname: string
    title: string
    content: string
    publishedDate: string
}
export const BlogListCard=({
    id,
    authorname,
    title,
    content,
    publishedDate
}:Blogtype)=>{


    return(
        <>
        <Link to={`/blog/${id}`}>
        <div className=" bg-slate-100 shadow-md  rounded-xl overflow-hidden m-3 p-6 cursor-pointer">
        <div className="flex py-3  px-8 ">
            <Avatar type="small" name={authorname}/>        
            <div className="text-xl text-slate-800 font-semibold px-3 ">{authorname} . </div>
            <div className="text-base text-slate-500 mt-0.5 font-normal">{publishedDate}</div>
        </div>
        <div className="px-8">
        <div className="text-2xl text-slate-900 font-bold ">{title}</div>
        <div className="text-base text-slate-600 ">
            {content.length>100 ? content.slice(0,250)+"..." : content }
        </div>
        <div className="text text-slate-600 ">
            {`${Math.ceil(content.length/200)} mins read`}
        </div>
        </div>
        <div className="bg-slate-200 h-1 w-fit"></div>
        </div>
        </Link>
        </>
    )
}



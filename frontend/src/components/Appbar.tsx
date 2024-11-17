
import {Avatar} from "./Avatar"
export const Appbar=()=>{
    return (
        <>
        <div className="flex justify-between h-12 border-b border-slate-300 ">
            <div className="p-2 font-extrabold text-3xl mx-10  flex  items-center">
                WriteFlow
            </div>
            <div className="p-2 text-2xl mx-10  flex items-center">
                <Avatar name="John" type="big"/>
            </div>
            
        </div>
        </>
    )
}
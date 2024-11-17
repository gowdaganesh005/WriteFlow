export const Avatar=({name,type}:{name: string,type: "big" | "small"})=>{
    return(
    <div className={`relative inline-flex items-center justify-center ${type=="small"?"w-8 h-8":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${type=="small"?"font-medium ":"font-bold text-xl"}}  text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase()}</span>
    </div>

    )
}
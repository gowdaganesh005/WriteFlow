import { ChangeEventHandler } from "react"

interface LabelledInput{
    label: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    type?: string
}

export const LabelledInput=({label,placeholder,onChange,type}:LabelledInput)=>{
    return(
        <>
        <div>
            <label htmlFor="first_name" className="block  text-md pt-2 font-medium text-gray-500 ">{label}</label>
            <input type={type || "text"}  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 mb-1.5" placeholder={placeholder} required 
            onChange={onChange}
            />
        </div>
        </>
    )
}
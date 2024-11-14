import {  ChangeEventHandler, useState } from "react"
import { Link } from "react-router-dom"
import { UserSignUptype } from "gowda04-writeflow-common"



export const AuthSignup=()=>{
    const [signup,setSignup]=useState<UserSignUptype>({
        name:"",
        email:"",
        password:""
    })
    return( 
    <>
    <div className="h-screen flex justify-center flex-col ">
        <div className="flex justify-center ">
            <div>
        <div className="text-4xl font-extrabold">
           Create an Account
        </div>
        <div className="text-slate-400">
        Already have an account?
            
             
            <Link className="px-2 underline" to="/signin">
            Login
            
            </Link>
        </div>
        <div>
            <LabelledInput 
            label="Name"
            placeholder="John Doe"
            onChange={(e)=>setSignup({
                ...signup,
                name:e.target.value
            })}
             />

            <LabelledInput 
            label="Email"
            placeholder="johndoe@email.com"
            onChange={(e)=>setSignup({
                ...signup,
                email:e.target.value
            })}
            type="email"
             />

            <LabelledInput 
            label="Password"
            placeholder="Password"
            onChange={(e)=>setSignup({
                ...signup,
                password:e.target.value
            })}
            type="password"
             />
            <div className="py-4">
                <button type="submit"   className="text-white bg-gray-800  hover:bg-blue-800 focus:ring-4  focus:outline-none       focus:ring-gray-300 font-medium rounded-lg text-lg text- w-full px-4 py-2 text-center">

                   SignUp

                </button>
            </div>
            


        </div>
        </div>
        </div>

    </div>
    </>
    )
}

interface LabelledInput{
    label: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    type?: string
}

const LabelledInput=({label,placeholder,onChange,type}:LabelledInput)=>{
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
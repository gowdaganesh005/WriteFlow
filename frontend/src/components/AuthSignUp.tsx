import {   useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserSignUptype } from "gowda04-writeflow-common"
import { BACKEND_URL } from "../tsconfig"
import { LabelledInput } from "./labelledInput"
import axios from "axios"



export const AuthSignup=()=>{
    const navigate=useNavigate()

    const [signup,setSignup]=useState<UserSignUptype>({
        name:"",
        email:"",
        password:""
    })

    async function  SignUp(){
        try {
         const response=await axios.post(`${BACKEND_URL}/user/signup`,signup)
         const jwt=response.data.token
         localStorage.setItem("token",jwt)
         navigate("/blogs")
        } catch (error) {
         alert("Cannot signin")
         
        }
     }
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
                        <button 
                            type="submit"   
                            className="text-white bg-gray-800  hover:bg-blue-800 focus:ring-4  focus:outline-none  focus:ring-gray-300 font-medium  rounded-lg       text-lg text- w-full px-4 py-2 text-center"
                            onClick={SignUp}
                        >
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


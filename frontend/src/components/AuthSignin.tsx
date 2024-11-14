import {   useState } from "react"
import { Link } from "react-router-dom"
import { UserSignIntype } from "gowda04-writeflow-common"
import { LabelledInput } from "./labelledInput"
import axios from "axios"


function login(){
    axios.post("")
}



export const AuthSignIn=()=>{
    const [signin,setSignin]=useState<UserSignIntype>({
        
        email:"",
        password:""
    })
    return( 
    <>
    <div className="h-screen flex justify-center flex-col ">
        <div className="flex justify-center ">
            <div>
        <div className="text-4xl font-extrabold">
           Login to account
        </div>
        <div className="text-slate-400">
        Dont have an account
            
             
            <Link className="px-2 underline" to="/signup">
            SignUp
            
            </Link>
        </div>
        <div>
            

            <LabelledInput 
            label="Email"
            placeholder="johndoe@email.com"
            onChange={(e)=>setSignin({
                ...signin,
                email:e.target.value
            })}
            type="email"
             />

            <LabelledInput 
            label="Password"
            placeholder="Password"
            onChange={(e)=>setSignin({
                ...signin,
                password:e.target.value
            })}
            type="password"
             />
            <div className="py-4">
                <button 
                type="submit"   
                className="text-white bg-gray-800  hover:bg-blue-800 focus:ring-4  focus:outline-none  focus:ring-gray-300 font-medium rounded-lg text-lg text- w-full px-4 py-2 text-center"
                onClick={login}
                >
                   Login

                </button>
            </div>
            


        </div>
        </div>
        </div>

    </div>
    </>
    )
}


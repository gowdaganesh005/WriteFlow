import { Quote } from "../components/Quote"
import { AuthSignup } from "../components/AuthSignUp"
export const SignUp=()=>{
    
    return(
        <>
        <div className="grid  lg:grid-cols-2  ">
            <div>
                <AuthSignup/>

            </div>
            <div className="none lg:block">
                <Quote />
            </div>
        </div>
        </>
    )
    
}
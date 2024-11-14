import { Quote } from "../components/Quote"
import { AuthSignIn } from "../components/AuthSignin"
export const SignIn=()=>{
    return(
        <>
        <div className="grid  lg:grid-cols-2  ">
            <div>
                <AuthSignIn/>

            </div>
            <div className="none lg:block">
                <Quote />
            </div>
        </div>
        </>
    )
}
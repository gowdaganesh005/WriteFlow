export const hashpassword=async (password:string)=>{
    const encoder=new TextEncoder();
    const data=encoder.encode(password)
    const hash=await crypto.subtle.digest('SHA-256',data)
    return Array.from(new Uint8Array(hash))
    .map(b=>b.toString(16).padStart(2,"0")).join("")


}

export const comparePass=async ( plainPassword:string,hashedPassword:String)=>{
    const password=await hashpassword(plainPassword);
    return password===hashedPassword
        
}
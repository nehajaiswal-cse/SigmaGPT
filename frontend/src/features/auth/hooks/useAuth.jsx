import{useContext, useEffect} from "react";

import { AuthContext } from "../auth.context";
import { login, register, logout ,getMe} from "../function/auth.api";
//hooklayer managing state and api layer
export const useAuth=()=>{
    const context = useContext(AuthContext)
    const{user,setUser,loading,setloading} = context

    const handleLogin = async({email,password})=>{
        setloading(true)
        try{
            const data = await login({email,password})   
            setUser(data.user)
        }
       catch(e){
           console.error("Login error:", e);
        }
        finally{
            setloading(false)
        }
       
    }

    const handleRegister = async({username,email,password})=>{
        setloading(true)
        try{
           const data = await register({username,email,password})
            setUser(data.user)
        }catch(err){

        }
        finally{
           setloading(false)
        }
        
    }

    const handleLogout = async()=>{
         setloading(true)
        try{
           const data = await logout()
            setUser(null)
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        catch(err){
            
        }
       finally{
        setloading(false)
       }
        
    }

    

    return{user,loading,handleRegister,handleLogin,handleLogout}
}
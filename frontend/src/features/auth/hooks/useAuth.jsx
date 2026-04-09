import{useContext, useEffect} from "react";

import { AuthContext } from "../auth.context";
import { login, register, logout ,getMe} from "../service/auth.api";
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
        }
        catch(err){
            
        }
       finally{
        setloading(false)
       }
        
    }

    useEffect(()=>{
        const getAndSetUser = async()=>{
            setloading(true)
           try {
            const token = localStorage.getItem('token')
            // Only try to get user if token exists
            if(token){
                const res = await getMe()
                setUser(res?.user || null)
            } else {
                setUser(null)
            }
        } catch(e) {
            console.error("Auth check failed:", e)
            setUser(null)
            localStorage.removeItem('token')
        } finally {
            setloading(false)
        }
        }
        getAndSetUser()
    },[])

    return{user,loading,handleRegister,handleLogin,handleLogout}
}
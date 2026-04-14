import{createContext,useEffect,useState} from "react";
import { getMe } from "./function/auth.api";
export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const[user,setUser]=useState(null)
    const[loading,setloading]=useState(true)

     useEffect(()=>{
            console.log("Checking auth status...")
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
        },[]);
     
// createContext() → banaya context
//.Provider → data dene ke liye use kiya
// value={{...}} → jo data dena hai
//{children} → jinhe data milega

    return(
        <AuthContext.Provider value={{user,setUser,loading,setloading}}>                             
            {children}
        </AuthContext.Provider>
    ) 

}
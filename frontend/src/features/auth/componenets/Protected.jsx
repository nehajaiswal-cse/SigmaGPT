import {useAuth} from "../hooks/useAuth";
import { Navigate } from "react-router";
import Loader from "../../../features/Loader";
import React from "react"


const Protected = ({children})=>{
    const{loading,user} = useAuth()
    
    if(loading){
        return (<main><Loader  text="Logging you out safely" /></main>)
    }
    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }

    return <>{children}</>

}
export default Protected
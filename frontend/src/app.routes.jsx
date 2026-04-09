import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/register"

import Portfolio from "./features/auth/pages/portfolio"

export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login></Login>
    },{
        path:"/register",
        element:<Register></Register>
    },{
        path:"/",
        element:<Protected>SigmaGPT</Protected>
    }
])
import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/register"
import Protected from "./features/auth/componenets/Protected"
import Dashboard from "./features/chat/pages/Dashboard"


export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login></Login>
    },{
        path:"/register",
        element:<Register></Register>
    },{
        path:"/",
        element:<Protected><Dashboard /></Protected>
    }
])
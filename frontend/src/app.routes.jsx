import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/register"
import Protected from "./features/auth/componenets/Protected"
import Dashboard from "./features/chat/pages/Dashboard"
import CodeGen from "./features/chat/pages/CodeGen"
import CodeFix from "./features/chat/pages/CodeFix"
import About from "./features/chat/pages/about"

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
    },
    {
        path:"/codegen",
        element:<Protected><CodeGen /></Protected>
    },
    {
        path:"/codefix",
        element:<Protected><CodeFix /></Protected>
    },
    {
        path:"/about",
        element:<About></About>
    }
])
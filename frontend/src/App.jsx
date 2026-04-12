import {RouterProvider} from 'react-router'
import{router} from "./app.routes.jsx"
import { AuthProvider } from './features/auth/auth.context.jsx'
import { ChatProvider } from './features/chat/chatContext.jsx'

export default function App() {
  return (
    <AuthProvider>
      <ChatProvider>
           <RouterProvider router ={router}></RouterProvider>
      </ChatProvider>
        
    </AuthProvider>
   
  )
}

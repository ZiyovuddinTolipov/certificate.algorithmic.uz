import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login";
import Test from '../pages/Test.jsx'
import Resetpassword from "../pages/ResetPassword"

const Routs = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/test',
        element: <Test />
    },
    {
        path:'/reset',
        element:<Resetpassword />
    },
    {
        path: '/*',
        element: <div>Error sahifa</div>
    },
    
])

export default Routs
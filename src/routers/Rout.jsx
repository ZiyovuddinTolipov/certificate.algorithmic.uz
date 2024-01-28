import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login.jsx";



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
        path: '/*',
        element: <div>Error sahifa</div>
    },
    
])

export default Routs
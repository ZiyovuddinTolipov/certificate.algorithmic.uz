import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import HomePage from './pages/Home';
import Login from "./pages/Login"
import NotFound from './pages/NotFound';
import Test from './pages/Test';
import Resetpassword from './pages/ResetPassword'
import Profile from './pages/Profile'

import { Toaster } from "react-hot-toast"
function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/dashboard', element: <HomePage /> },
    { path: '/test', element: <Test /> },
    { path: '/login', element: <Login /> },
    { path: '/reset', element: <Resetpassword /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> }
  ]);

  return (
    <main className='bg-[#020817] h-full'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {routes}
    </main>
  );
}

export default App
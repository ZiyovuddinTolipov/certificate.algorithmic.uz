import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import HomePage from './pages/Home';
import Login from "./pages/Login"
import NotFound from './pages/NotFound';
import Test from './pages/Test';
import Resetpassword from './pages/ResetPassword'

import { ToastContainer } from "react-toastify"
import Rout from './routers/Rout'
function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/test', element: <Test /> },
    { path: '/login', element: <Login /> },
    { path: '/reset', element: <Resetpassword /> },
    { path: '*', element: <NotFound /> }
  ]);


  return (

    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      {/* <Navbar /> */}
      {routes}
      {/* <Footer /> */}
    </main>
  );
}

export default App
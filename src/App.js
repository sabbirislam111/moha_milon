
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layout/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import PrivetRoutes from './routes/PrivetRoutes';
import Order from './component/order/Order';
import Main from './component/Main/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/order',
          element: <PrivetRoutes><Order></Order></PrivetRoutes>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/main',
          element: <PrivetRoutes><Main></Main></PrivetRoutes>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div> 
  );
}

export default App;

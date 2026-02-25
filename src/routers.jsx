import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";



const router = createBrowserRouter([


    {
        path: '/',
        element:
            <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {

                path: 'cart',
                element: <Cart />
            },
            {
                path: 'login/register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }



]);


export default router;
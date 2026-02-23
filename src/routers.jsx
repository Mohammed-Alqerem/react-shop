import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import UserContextProvider from "./context/UserContext";



const router = createBrowserRouter([


    {
        path: '/',
        element:
            <UserContextProvider>
                <MainLayout />
            </UserContextProvider>,
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
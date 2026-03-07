import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import ProductDetails from "./pages/products/ProductDetails";
import CategoriesPage from "./pages/categories/CategoriesPage";
import ProtectedRounter from "../ProtectedRounter";

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
                path: 'product/:id',
                element: <ProductDetails />
            },
            {
                path: 'categories',
                element: <CategoriesPage />
            },
            {
                path: 'cart',
                element:
                    <ProtectedRounter>
                        <Cart />
                    </ProtectedRounter>
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
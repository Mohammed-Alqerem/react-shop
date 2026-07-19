import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import ProductDetails from "./pages/products/ProductDetails";
import CategoriesPage from "./pages/categories/CategoriesPage";
import ProtectedRouter from "../ProtectedRouter";
import Profile from "./pages/profile/Profile";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import ChangePassword from "./components/changePassword/changePassword";
import Unauthorized from "./pages/unauthorized/Unauthorized";

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
                path: 'categories/product/:id',
                element:
                    <ProtectedRouter>
                        <ProductDetails />
                    </ProtectedRouter>
            },

            {
                path: 'profile',
                element:
                    <ProtectedRouter>
                        <Profile />
                    </ProtectedRouter>,
                children: [
                    {
                        index: true,
                        element: <ProfileInfo />
                    },
                    {
                        path: 'orders',
                        element: <ProfileOrders />
                    },
                    {
                        path: 'changePassword',
                        element: <ChangePassword />
                    }
                ]
            },
            {
                path: 'categories',
                element:
                    <ProtectedRouter>
                        <CategoriesPage />
                    </ProtectedRouter>
            },
            {
                path: 'cart',
                element:
                    <ProtectedRouter>
                        <Cart />
                    </ProtectedRouter>
            },
            {
                path: 'login/register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: '/unauthorized',
        element: <Unauthorized />
    }



]);


export default router;
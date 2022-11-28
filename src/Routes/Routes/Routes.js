import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../DashboardLayout/Add A product/AddProduct";
import AllSellers from "../../DashboardLayout/All Sellers,/AllSellers";
import AllBayer from "../../DashboardLayout/allByer/AllBayer";
import DashbordLayout from "../../DashboardLayout/DashbordLayout";
import MyOrders from "../../DashboardLayout/My orders/MyOrders";
import MyProduct from "../../DashboardLayout/myProduct/MyProduct";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/404Page/ErrorPage";

import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../../PrivateRouter/PrivateRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/signIn',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories/:id',
                element: <PrivateRouter><AllProducts></AllProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`https://used-product-laptop-market-server.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRouter><DashbordLayout></DashbordLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },

            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBayer',
                element: <AllBayer></AllBayer>
            }
        ]
    }
])
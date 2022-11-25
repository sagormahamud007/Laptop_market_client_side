import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../DashboardLayout/Add A product/AddProduct";
import AllSellers from "../../DashboardLayout/All Sellers,/AllSellers";
import DashbordLayout from "../../DashboardLayout/DashbordLayout";
import MyOrders from "../../DashboardLayout/My orders/MyOrders";
import Main from "../../Layout/Main";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
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
                element: <AllProducts></AllProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSellers></AllSellers>
            },
            // {
            //     path: '/dashboard/manageDoctors',
            //     element: <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <AdminRouter><Payment></Payment></AdminRouter>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            // },
        ]
    }
])
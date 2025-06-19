import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "about-us",
                element: <Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>
            },
            {
                path: "contact-us",
                element: <ContactUs />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu />
            }
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import RootLayout from "../layouts/RootLayout.jsx";
import HomePage from "../pages/Index.jsx";
import FormData from "../pages/FormData.jsx";
import Lazy from "../components/ErrorHandling/Lazy.jsx";

const router  = createBrowserRouter([
    {
        path    : "*",
        element : < ErrorPage />
    },
    {
        path    : "/",
        element : < RootLayout />,
        hydrateFallbackElement    : < Lazy/>,
       children: [
        {
            index : true,
            element : < HomePage />
        },
        {
            path    : "/tambah",
            element : < FormData/>
        },
        {
            path : "/edit/:id",
            element : < FormData/>
        }
       ]
    }
]);

export default router;
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout.jsx"
import HomePage from "../pages/Index.jsx";
import TambahData from "../pages/Tambah.jsx";

const router  = createBrowserRouter([
    {
        path    : "/",
        element : < RootLayout />,
       children: [
        {
            index : true,
            element : < HomePage />
        },
        {
            path    : "/tambah",
            element : < TambahData/>
        }
       ]
    }
]);

export default router;
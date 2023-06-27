import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
// import DashboardPage from "../pages/dashboardPage";
import StartingPage from "../pages/startingPage";
import TablePage from "../pages/tablePage";

// function protectRoute() {
//     if (localStorage.access_token) {
//         throw redirect("/")
//     } else {
//         return null
//     }
// }

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/home",
        element: <StartingPage/>
    },
    // {
    //     path: "/table",
    //     element: <TablePage/>
    // }
])
export default router
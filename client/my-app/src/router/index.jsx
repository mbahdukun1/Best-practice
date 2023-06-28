import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
// import DashboardPage from "../pages/dashboardPage";
import StartingPage from "../pages/startingPage";
import TablePage from "../pages/tablePage";
import PieChart from "../components/pieChart";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout";
import TableCategory from "../pages/tableCategories";

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
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <StartingPage/>
            },
            {
                path: "/tableProduct",
                element: <TablePage/>
            },
            {
                path: "/tableCategory",
                element: <TableCategory/>
            },
            {
                path: "/barChart",
                element: <BarChart/>
            },
            {
                path: "/pieChart",
                element: <PieChart/>
            },
            {
                path: "/lineChart",
                element: <LineChart/>
            }
        ]
    }
   
])
export default router
import { Outlet } from "react-router-dom";
import Sidebar from "./navbar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

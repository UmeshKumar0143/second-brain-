import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

export default function Layout() {
  return (
    <div className="sm:flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Outlet /> {/* This updates dynamically */}
      </div>
    </div>
  );
}

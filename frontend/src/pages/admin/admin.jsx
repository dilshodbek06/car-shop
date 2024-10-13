import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        {/* sidebar */}
        <div className="hidden md:flex  bg-white h-full w-60 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        {/* outlet */}
        <div className="md:pl-60 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;

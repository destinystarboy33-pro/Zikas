import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/SideBar";


const AdminLayout = () => {
  return (
    <div>
    <AdminSidebar />
      <Outlet />
     
    </div>
  );
};

export default AdminLayout;

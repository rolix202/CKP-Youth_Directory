import { Outlet } from "react-router-dom"
import DashboardSidebar from "./DashboardSidebar";
import AdminHeader from "../../components/admin/admin_header";
import "./DashboardLayout.css";

function DashbordLayout() {
  return (
    <section className="admin">
            <AdminHeader />

            <div class="container-fluid">
                <div class="row">
                    <DashboardSidebar />

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">


                            <Outlet />
                        </div>


                        
                    </main>
                </div>
            </div>
        </section>
  )
}

export default DashbordLayout;
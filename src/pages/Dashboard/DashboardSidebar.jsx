import AdminMenu from "../../components/admin/admin_menu";
import { images } from "../../constants";

function DashboardSidebar() {
    return (
        <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">

                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="sidebarMenuLabel"><img src={images.Logo} alt="logo" /> </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">

                    <AdminMenu />

                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar;
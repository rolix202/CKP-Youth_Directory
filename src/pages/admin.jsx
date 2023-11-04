import React from "react";
import "./admin.css"
import AdminHeader from "../components/admin/admin_header";
import { images } from "../constants";
import AdminMenu from "../components/admin/admin_menu";
import { FaGear } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

function Admin() {
    return (
        <section className="admin">
            <AdminHeader />

            <div class="container-fluid">
                <div class="row">
                    <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                            
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="sidebarMenuLabel"><img src={images.Logo} alt="logo" /> </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>

                            <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                
                                <AdminMenu />

                                <hr class="my-3" />

                                <ul class="nav flex-column mb-auto">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">
                                        <i><FaGear /> </i>
                                            Settings
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">
                                            <i><FaSignOutAlt /> </i>
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                        </div>


                        
                    </main>
                </div>
            </div>
        </section>
    )
}
export default Admin;
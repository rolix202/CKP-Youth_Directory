import React from "react";
import { images } from "../../constants";
import { FaBars } from "react-icons/fa6";


function AdminHeader() {
    return (
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#"><img src={images.Logo} alt="" /></a>

            <ul className="navbar-nav flex-row d-md-none">

                <li className="nav-item text-nowrap">
                    <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="menu_bar">{<FaBars /> } </i>
                        {/* <svg class="bi"><use xlink: href="bootstrap-icons.svg#list" /></svg> */}
                    </button>
                </li>
                
            </ul>
        </header>
    )
}
export default AdminHeader;
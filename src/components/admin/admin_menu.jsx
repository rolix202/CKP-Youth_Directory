import React from "react";
import { nav } from "../../Data";
import { Link } from "react-router-dom";

function AdminMenu() {
    // console.log(nav[0].link);
    return (
        <ul className="nav flex-column">
            {nav.map((li, index) => {
                return (
                    <li className="nav-item" key={index}>
                    <Link to={li.path} className="nav-link d-flex align-items-center gap-2 actfive menu_link" aria-current="page">
                        <i className="text-success"> { li.icon } </i>
                        { li.link }
                    </Link>
                </li>
                )
               
            })}
 
        </ul>
    )
}
export default AdminMenu;
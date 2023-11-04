import React from "react";
import { nav } from "../../Data";

function AdminMenu() {
    // console.log(nav[0].link);
    return (
        <ul className="nav flex-column">
            {nav.map((li, index) => {
                return (
                    <li className="nav-item" key={index}>
                    <a className="nav-link d-flex align-items-center gap-2 actfive menu_link" aria-current="page" href="#">
                        <i className="text-success"> { li.icon } </i>
                        { li.link }
                    </a>
                </li>
                )
               
            })}
 
        </ul>
    )
}
export default AdminMenu;
import React from "react";
import { NavLink } from "react-router-dom";
import { images } from "../constants";
import "../assets/css/header.css"

const navItemsInfo = [
  { name: "Home", path: "/" },
  { name: "CYON members", path: "/cyonites" },
  { name: "About CKP, Odenigbo", path: "/ckp" },
  {name: "Hire a Developer", path: "/developer" }
];

function NavItem({ name, path }) {
    return (
    <li className="nav-item">
      <NavLink to={path} className={`nav-link custom_link ${({isActive}) => (isActive ? "link_active" : "")}`} aria-current="page">
        {name} /
        {/* <span className="nav-link-underline"></span> */}
      </NavLink>
    </li>
  );
};

function Header() {
  return (
    <section >
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll nav_custom">
          <div className="container">
            <a className="navbar-brand" href="">
              <img src={images.Logo} alt="logo" className="logo"/>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p4">
                {navItemsInfo.map((item)=>(
                    <NavItem key={item.name} name={item.name} path={item.path} />
                ))}
              </ul>
              <button className="btn btn-outline-success rounded-pill" type="submit">
                Sign UP
              </button>
            </div>
          </div>
        </nav>
    </section>
  );
}
export default Header;

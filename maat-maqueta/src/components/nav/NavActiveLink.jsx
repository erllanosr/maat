import React from "react";
import { NavLink as NavLinkRouter } from "react-router-dom";
import "./nav.css";

function NavActiveLink({ to, children, ...props }) {
  return (
    <NavLinkRouter
      {...props}
      className={({ isActive }) =>
        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
        (isActive
          ? "seleccionada focus:seleccionada "
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")
      }
      to={to}
    >
      {children}
    </NavLinkRouter>
  );
}

export default NavActiveLink;

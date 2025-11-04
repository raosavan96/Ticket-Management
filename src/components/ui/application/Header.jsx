import React from "react";
import { FaTicketAlt, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.jpg";
import { RiSettings5Line } from "react-icons/ri";

export default function Header() {
  return (
    <header className="w-full bg-[#2c334d] shadow-md">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center md:gap-x-10 gap-x-10">
          <div>
            <img src={Logo} alt="logo" className="w-10" />
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium text-gray-300">
            <NavLink
              to={`/tickets`}
               className={({ isActive }) =>
              `flex items-center gap-2 md:text-base text-sm py-2 text-white ${
                isActive ? "border-b border-b-white" : "border-b border-b-transparent"
              }`
            }
            >
              <FaTicketAlt /> Tickets
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-x-6">
          <NavLink
            to={`/tickets/add-ticket`}
            className={`px-3 py-2.5 text-white rounded text-sm bg-[blue]`
            }
          >
            <FaPlus />
          </NavLink>
          <button className=" text-white text-xl">
            <RiSettings5Line />
          </button>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg">
            L
          </div>
        </div>
      </div>
    </header>
  );
}

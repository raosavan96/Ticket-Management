import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarLinks = [] }) => {
  return (
    <div className="w-16 h-full bg-[#2c334d] border-t border-white/25">
      <div>
        {sidebarLinks.map((nav, index) => (
          <NavLink
            key={index}
            to={nav?.href}
            end
            className={({ isActive }) =>
              `flex items-center text-wrap text-center flex-col font-medium text-white gap-1 py-3 text-sm   ${
                isActive ? "border-l border-l-white bg-[#383f57]" : "border-l border-l-transparent"
              }`
            }
          >
            {nav?.icon}
            <p>{nav?.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

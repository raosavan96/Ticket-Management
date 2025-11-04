import BreadcrumbSec from "@/components/ui/application/BreadcrumbSec";
import Sidebar from "@/components/ui/application/sidebar/Sidebar";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdRssFeed } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";

const Tickets = () => {
  const { pathname } = useLocation();
  const isAddTicket = pathname.includes("/tickets/add-ticket");

  if (isAddTicket) {
    return <Outlet />;
  }

  const breadCrumbData = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/tickets",
      label: "Tickets",
    },
  ];
  const sidebarLinks = [
    {
      href: "",
      label: "HQ",
      icon: <LuLayoutDashboard className="text-base" />
    },
    {
      href: "/team-feed",
      label: "Team Feed",
      icon: <MdRssFeed className="text-base"/>
    },
    {
      href: "/tickets/view",
      label: "View",
      icon: <VscFileSubmodule className="text-base"/>
    },
    {
      href: "/tags",
      label: "Tags",
      icon: <IoPricetagsOutline  className="text-base"/>
    },
    {
      href: "/tickets/drag-box",
      label: "Drag Box",
      icon: <IoPricetagsOutline  className="text-base"/>
    },
  ];
  return (
    <div className="relative  size-full">
      {/* <div className="top-0 z-20 sticky py-3 bg-white px-5 shadow">
        <BreadcrumbSec breadcrumbData={breadCrumbData} />
      </div> */}
      <div className="h-full flex">
        <div className="h-full">
          <Sidebar sidebarLinks={sidebarLinks}/>
        </div>
        <div className="w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

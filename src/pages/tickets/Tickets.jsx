import BreadcrumbSec from "@/components/ui/application/BreadcrumbSec";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

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
  return (
    <div className="relative">
      <Outlet />
      <div className="top-0 z-20 sticky py-3 bg-white px-5 shadow">
        <BreadcrumbSec breadcrumbData={breadCrumbData} />
      </div>
      <div className="px-5"></div>
    </div>
  );
};

export default Tickets;

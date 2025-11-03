"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbSec = ({ breadcrumbData = [] }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbData.map((data, index) => {
          const isActive = pathname === data.href;

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to={data.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {data.label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {index !== breadcrumbData.length - 1 && (
                <BreadcrumbSeparator className="mx-2 mt-0.5" />
              )}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbSec;

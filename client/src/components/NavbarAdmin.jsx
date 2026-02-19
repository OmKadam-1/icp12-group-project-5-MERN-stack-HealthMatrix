import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Briefcase,
  PlusSquare,
  CalendarCheck,
} from "lucide-react";

import Logo from "../assets/logo.png"; 

const NavbarAdmin = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Appointments", path: "/admin/appointments", icon: Calendar },
    { name: "Service Dashboard", path: "/admin/service-dashboard", icon: Briefcase },
    { name: "Add Service", path: "/admin/add-service", icon: PlusSquare },
    { name: "Service Appointments", path: "/admin/service-appointments", icon: CalendarCheck },
  ];

  return (
    <div className="w-full flex items-center justify-between px-8 py-4 bg-[#e6f4ef]">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-12 h-12 object-contain" />
        <div>
                     <h1 className="text-2xl font-bold text-green-600">
              <span className="text-black">Health</span>Matrix+
            </h1>

          <p className="text-sm text-gray-500">Healthcare Solutions</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center bg-white border border-green-200 rounded-full px-6 py-3 shadow-md gap-8">

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center text-xs font-medium transition
                ${isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"}
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}

      </div>
    </div>
  );
};

export default NavbarAdmin;

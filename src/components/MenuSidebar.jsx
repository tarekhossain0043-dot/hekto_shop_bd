import React from "react";
import * as lucideIcon from "lucide-react";
import { Link } from "react-router-dom";
const MenuSidebar = () => {
  const nav_menu = [
    {
      to: "/",
      id: 1,
      type: "active",
      label: "Home",
      icon: "ChevronDown",
      submenu: [
        {
          id: "a1",
          to: "/",
          label: "Home page 1",
        },
        {
          id: "a2",
          to: "/home-2",
          label: "Home page 2",
        },
        {
          id: "a3",
          to: "/home-3",
          label: "Home page 3",
        },
      ],
    },
    {
      to: "/pages",
      id: 2,
      label: "Pages",
    },
    {
      to: "/products",
      id: 3,
      label: "Products",
    },
    {
      to: "/blog ",
      id: 4,
      label: "Blog ",
    },
    {
      to: "/shop",
      id: 5,
      label: "Shop",
    },
    {
      to: "/contact",
      id: 6,
      label: "Contact",
    },
  ];
  return (
    <div className="relative">
      <div className="max-w-lg h-screen bg-slate-200 backdrop-blur-md p-32">
        <ul className="flex flex-col gap-4">
          {nav_menu.map((nav) => {
            const Icon = lucideIcon[nav.icon];
            return (
              <li key={nav.id} className="list-none relative group">
                <Link
                  key={nav.id}
                  to={nav.to}
                  className={`${
                    nav.type === "active" ? "text-primary" : "text-secondary"
                  } flex items-center gap-2`}
                >
                  {nav.label}
                  {Icon && (
                    <Icon className="w-4 h-4 group-hover:rotate-180 transition-all duration-300 ease-in-out" />
                  )}
                </Link>
                {nav.submenu && nav.submenu.length > 0 && (
                  <ul className="group-hover:block hidden group-hover:translate-y-0 translate-y-7 transition-all duration-500 ease-in-out bg-slate-100 text-slate-400">
                    {nav.submenu.map((subitem) => (
                      <li
                        key={subitem.id}
                        className="px-4 py-2 text-slate-500 hover:text-secondary hover:bg-slate-200"
                      >
                        <Link to={subitem.to || "#"}>{subitem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuSidebar;

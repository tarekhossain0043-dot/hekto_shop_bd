import { ChevronDown } from "lucide-react";
import React from "react";
import * as lucideIcon from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = () => {
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
    <div className="mt-5 bg-transparent">
      <div className="container px-4 md:px-6 lg:px-7 xl:px-8 flex items-center justify-between ">
        {/* nav left */}
        <div className="flex items-center gap-22">
          <Link to="/">
            <span className="text-[34px] font-bold text-secondary font-josefin capitalize hover:text-primary transition-all duration-300 ease-in-out">
              hekto
            </span>
          </Link>
          <nav className="flex items-center gap-9 max-[926px]:hidden">
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
                    {Icon && <Icon className="w-4 h-4" />}
                  </Link>
                  {nav.submenu && nav.submenu.length > 0 && (
                    <ul className="w-40 group-hover:block hidden group-hover:translate-y-0 translate-y-7 absolute top-full left-0 transition-all duration-500 ease-in-out bg-slate-100 text-slate-400">
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
          </nav>
          {/* toggle menu */}
          <div>
            <lucideIcon.Menu className="w-5 h-5" />
          </div>
        </div>

        {/* nav right */}
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Nav;

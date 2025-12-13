import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer_Bottom = () => {
  return (
    <div className="bg-[#E7E4F8] py-4.5">
      <div className="container px-20">
        <div className="flex flex-col gap-5 md:flex-row items-center justify-between px-20 ">
          <p className="mb-0 text-[#9DA0AE] whitespace-nowrap">
            ©Webecy - All Rights Reserved
          </p>
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 bg-[#151875] rounded-full cursor-pointer flex items-center justify-center hover:bg-primary transition-all duration-300 ease-in-out">
              <Facebook className="w-5 h-5 text-head-txt" />
            </span>
            <span className="w-10 h-10 bg-[#151875] rounded-full cursor-pointer flex items-center justify-center hover:bg-primary transition-all duration-300 ease-in-out">
              <Twitter className="w-5 h-5 text-head-txt" />
            </span>
            <span className="w-10 h-10 bg-[#151875] rounded-full cursor-pointer flex items-center justify-center hover:bg-primary transition-all duration-300 ease-in-out">
              <Instagram className="w-5 h-5 text-head-txt" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_Bottom;

import React from "react";

const EmailBar = () => {
  return (
    <div className="max-w-94.25 truncate w-full bg-slate-50 shadow shadow-primary rounded-sm w-full flex items-center gap-1">
      <input
        type="email"
        placeholder="Enter Email Address"
        className="px-4 py-2 pr-5 w-full text-[#8A8FB9] capitalize font-lato font-normal outline-none text-sm normal-case"
      />
      <div className="bg-primary my-2 mr-2 rounded-sm cursor-pointer text-[16px] font-medium text-head-txt text-head-txt flex capitalize px-10 py-2.5 items-center justify-center">
        sign up
      </div>
    </div>
  );
};

export default EmailBar;

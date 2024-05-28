import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%] bg-blue-950 px-4 py-8 flex">
      <div className="layout flex flex-row justify-center items-center">
        <p className="text-[22px] font-[600] text-white">FormBuilder</p>
      </div>
      <div className="flex justify-normal gap-2 font-[500]">
        <Link to={""} className="text-white">
          Saved Form
        </Link>
        <Link to={""} className="text-white">
          BuildForm
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

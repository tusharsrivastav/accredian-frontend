import React from "react";

const Nav = () => {
  return (
    <div className="w-full px-8">
      <div className="bg-blue-light flex flex-row justify-evenly max-w-xl mx-auto mt-14 py-4 rounded-4xl">
        <button className="font-roboto text-sm md:text-[18px] text-text-black hover:text-blue cursor-pointer">
          Refer
        </button>
        <button className="font-roboto text-sm md:text-[18px] text-text-black hover:text-blue cursor-pointer">
          Benefits
        </button>
        <button className="font-roboto text-sm md:text-[18px] text-text-black hover:text-blue cursor-pointer">
          FAQs
        </button>
        <button className="font-roboto text-sm md:text-[18px] text-text-black hover:text-blue cursor-pointer">
          Support
        </button>
      </div>
    </div>
  );
};

export default Nav;

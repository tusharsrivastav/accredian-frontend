import React from "react";
import referBgHorizontal from "../assets/referBgHorizontal.svg"
import referBgVertical from "../assets/referBgVertical.svg"

const Refer = () => {
  return (
    <div className="w-full bg-blue-light">
      <div className="max-w-[1360px] mx-auto mt-24 py-12 flex flex-col">
        <h1 className="text-3xl text-text-black font-roboto text-center">
          How Do <span className="text-blue">I Refer?</span>
        </h1>

        <img src={referBgHorizontal} alt="" className="hidden md:block my-8" />
        <img src={referBgVertical} alt="" className="block md:hidden w-72 mx-auto my-2" />

        <button
          type="submit"
          className="h-16 w-56 mx-auto bg-blue text-white font-inter rounded-md cursor-pointer text-lg hover:opacity-80">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default Refer;

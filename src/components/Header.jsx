import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row max-w-[1360px] justify-between mx-auto my-4 px-4">
        {/* header left content */}
        <div className="flex flex-row align-middle">
          <img src={logo} alt="Accredian logo" />
          <button
            type="submit"
            className="ml-7 h-10 py-2 px-[18px] bg-blue text-white font-inter rounded-md cursor-pointer text-sm hover:opacity-80">
            Courses
            <FontAwesomeIcon icon={faAngleDown} className="my-auto ml-1" />
          </button>
        </div>

        {/* header right content */}
        <div className="flex flex-row">
          <button
            type="submit"
            className="mx-4 h-10 text-text-black font-inter rounded-md cursor-pointer text-sm hover:opacity-80">
            Refer & Earn
          </button>
          <button
            type="submit"
            className="mx-4 h-10 text-text-black font-inter rounded-md cursor-pointer text-sm hover:opacity-80">
            Resources
          </button>
          <button
            type="submit"
            className="mx-4 h-10 text-text-black font-inter rounded-md cursor-pointer text-sm hover:opacity-80">
            About Us
          </button>
          <button
            type="submit"
            className="mx-4 h-10 py-2 px-[18px] bg-gray-300 text-black-text font-inter rounded-md cursor-pointer text-sm hover:bg-gray-400 hover:opacity-80">
            Login
          </button>
          <button
            type="submit"
            className="h-10 py-2 px-[18px] bg-blue text-white font-inter rounded-md cursor-pointer text-sm hover:opacity-80">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

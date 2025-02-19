import React from "react";
import heroImage from "../assets/hero.png";
import { useModal } from "../context/ModalContext";

const Hero = () => {
  const { setIsOpen } = useModal();

  return (
    <div className="w-full px-4">
      <div className="max-w-[1360px] h-auto bg-blue-light rounded-2xl md:rounded-3xl my-6 mx-auto flex flex-row justify-between px-0 md:pl-16 md:pr-6 hero-shadow">
        <div className="my-8 md:my-auto mx-auto md:mx-0 flex flex-col">
          <h1 className="font-roboto text-4xl md:text-7xl font-bold text-text-black text-center md:text-left mx-auto">
            Let’s Learn & Earn
          </h1>
          <p className="font-roboto text-text-black text-md md:text-4xl font-normal mt-3 md:mt-6 w-64 md:w-80 text-center md:text-left mx-auto md:mx-0">
            Get a chance to win up-to{" "}
            <span className="text-blue text-[22px] md:text-[40px] font-semibold">
              Rs.15,000
            </span>
          </p>

          <button
            type="submit"
            onClick={() => setIsOpen(1)}
            className="w-48 h-14 py-2 px-[18px] mt-4 md:mt-12 mx-auto md:mx-0 bg-blue text-white font-inter rounded-md cursor-pointer text-lg hover:opacity-80">
            Refer for free
          </button>
        </div>

        {/* only show on larger screens */}
        <img src={heroImage} alt="Hero Image" className="m-0 hidden md:block" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import BenefitsList from "./BenefitsList";
import BenefitsTable from "./BenefitsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col justify-center py-28">
        <h1 className="text-3xl text-text-black font-roboto text-center">
          What are the <span className="text-blue">Referral Benefits?</span>
        </h1>

        <div className="w-[1360px] mx-auto my-20">
          <div className="flex flex-row gap-2 align-middle w-full justify-end">
            <p className="my-auto text-lg font-roboto">Enrolled</p>
            <ToggleSwitch />
          </div>

          <div className="flex flex-row my-6 justify-between">
            <BenefitsList />
            <BenefitsTable />
          </div>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="w-44 h-10 flex flex-row justify-center gap-4 border-2 border-gray-300 text-gray-400 rounded-md cursor-pointer">
              <p className="my-auto p-0">Show More</p>
              <FontAwesomeIcon icon={faAngleDown} className="my-auto" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="h-16 w-56 mx-auto bg-blue text-white font-inter rounded-md cursor-pointer text-lg hover:opacity-80">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default Benefits;

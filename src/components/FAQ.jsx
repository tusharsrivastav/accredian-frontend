import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center mt-36">
        <h1 className="text-3xl text-text-black font-roboto text-center">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>

        <div className="flex flex-row max-w-[1360px] mx-auto justify-between gap-28 my-16">
          {/* Buttons */}
          <div className="flex flex-col gap-6">
            <button className="w-64 h-16 text-blue font-inter font-semibold shadow-xl rounded-lg">
              Eligibilty
            </button>
            <button className="w-64 h-16 text-gray-500 border-3 border-gray-500 font-inter font-semibold rounded-lg">
              Eligibilty
            </button>
            <button className="w-64 h-16 text-gray-500 border-3 border-gray-500 font-inter font-semibold rounded-lg">
              Eligibilty
            </button>
          </div>

          {/* FAQ Data */}
          <div className="max-w-[886px]">
            <h1 className="flex flex-row justify-between font-semibold text-blue">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
              <FontAwesomeIcon icon={faAngleUp} />
            </h1>
            <p className="my-4">
              No, the program is designed to be inclusive of all levels of
              experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.
            </p>
            <h1 className="flex flex-row justify-between font-semibold text-blue my-12">
              What is the minimum system configuration required?
              <FontAwesomeIcon icon={faAngleDown} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BenefitsList = () => {
  return (
    <ul className="w-auto shadow-lg rounded-lg overflow-hidden">
      <li className="flex flex-row justify-between bg-blue text-lg font-inter py-4 px-6 text-white">
        ALL PROGRAMS{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto text-xl" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Product Management{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Strategy & Leadership{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Business Management{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Fintech <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Senior Management{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Data Science{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6 border-b-2 border-gray-300">
        Digital Transformation{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
      <li className="flex flex-row justify-between text-lg font-[500] uppercase py-4 mx-6">
        Business Analytics{" "}
        <FontAwesomeIcon icon={faAngleRight} className="my-auto ml-4" />
      </li>
    </ul>
  );
};

export default BenefitsList;

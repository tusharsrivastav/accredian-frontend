import { faAngleRight, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Support = () => {
  return (
    <div className="w-full">
      <div className="bg-blue flex flex-row p-12 justify-between max-w-[1360px] rounded-xl mx-auto mt-16">
        <div className="flex flex-row gap-12 my-auto">
          <div className="bg-blue-400 p-1 rounded-xl">
            <div className="bg-white text-blue p-4 rounded-lg text-5xl">
              <FontAwesomeIcon icon={faHeadphones} />
            </div>
          </div>

          <div className="text-white my-auto">
            <h1 className="text-2xl font-semibold mb-2">
              Want to delve deeper into the program?
            </h1>
            <p>
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>

        <button className="text-blue bg-white rounded-lg w-52 h-11 my-auto font-semibold hover:opacity-85 cursor-pointer">
          Get in touch <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Support;

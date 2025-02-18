import React from "react";
import { useState } from "react";

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      className="my-auto w-11 h-5 rounded-full border-text-black border-2 relative cursor-pointer"
      onClick={handleToggle}>
      <div
        className={`rounded-full w-3 h-3 bg-blue absolute top-0.5 ${
          toggle ? "right-0.5" : "left-0.5"
        }`}></div>
    </div>
  );
};

export default ToggleSwitch;

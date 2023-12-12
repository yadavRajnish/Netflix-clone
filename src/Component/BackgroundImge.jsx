import React from "react";
import background from "../images/bgimg.png";
const BackgroundImge = ({className}) => {
  return (
    <div className={`h-[100vh] w-[100vw] ${className}`}> 
      <img src={background} alt="bcImg" className=" h-[100%] w-[100%] object-cover" />
      <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
    </div>
  );
};

export default BackgroundImge;

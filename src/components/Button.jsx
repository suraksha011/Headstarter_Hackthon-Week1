import React from "react";

const Button = ({ text, children }) => {
  return (
    <button className="w-fit flex gap-4 items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow-md shadow-black hover:gap-6 transition duration-600">
      <span className="max-sm:text-sm max-md:text-md text-lg">{text}</span>
      <span className="max-sm:text-sm max-md:text-md text-lg">{children}</span>
    </button>
  );
};

export default Button;

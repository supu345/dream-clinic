import React from "react";

const Departments = () => {
  return (
    <div>
      Departments
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg bg-white">
          <svg
            className="w-12 h-12 transform rotate-[-90deg]"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              className="stroke-blue-600"
              fill="none"
              strokeWidth="4"
              strokeDasharray="307.919"
              strokeDashoffset="186.19"
              style={{ transition: "stroke-dashoffset 200ms linear" }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Departments;

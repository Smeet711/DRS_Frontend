import React from "react";
import Icon from "../assets/verified.png";

const Verified = (props) => {
  return (
    <>
      <li className="pt-3 pb-0 sm:pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 mt-7">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={props.icon}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {props.text}
                  </p>
                </div>
              </div>
            </li>
          </div>
        </div>
      </li>
    </>
  );
};

export default Verified;
